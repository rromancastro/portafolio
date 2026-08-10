import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const [, , rawName] = process.argv;

if (!rawName) {
  console.error("Uso: npm run section Nombre");
  process.exit(1);
}

const toPascalCase = (value) =>
  value
    .replace(/Section$/i, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

const baseName = toPascalCase(rawName);

if (!baseName || !/^[A-Z][a-zA-Z0-9]*$/.test(baseName)) {
  console.error("El nombre de la section debe contener letras o numeros validos.");
  process.exit(1);
}

const sectionName = `${baseName}Section`;
const sectionId = `${sectionName.charAt(0).toLowerCase()}${sectionName.slice(1)}`;
const root = process.cwd();
const sectionsDir = path.join(root, "app", "sections");
const scssSectionsDir = path.join(root, "app", "sass", "sections");
const sectionPath = path.join(sectionsDir, `${sectionName}.jsx`);
const scssPath = path.join(scssSectionsDir, `_${sectionId}.scss`);
const indexPath = path.join(root, "app", "sections", "index.js");
const stylesPath = path.join(root, "app", "sass", "styles.scss");

if (existsSync(sectionPath)) {
  console.error(`Ya existe ${path.relative(root, sectionPath)}.`);
  process.exit(1);
}

if (existsSync(scssPath)) {
  console.error(`Ya existe ${path.relative(root, scssPath)}.`);
  process.exit(1);
}

mkdirSync(sectionsDir, { recursive: true });
mkdirSync(scssSectionsDir, { recursive: true });

writeFileSync(
  sectionPath,
  `export const ${sectionName} = () => {\n    return <section id="${sectionId}">\n        \n    </section>\n}\n`,
);

writeFileSync(scssPath, `#${sectionId} {\n}\n`);

const exportLine = `export * from "./${sectionName}";`;
const indexContent = existsSync(indexPath) ? readFileSync(indexPath, "utf8") : "";

if (!indexContent.includes(exportLine)) {
  writeFileSync(indexPath, `${indexContent.trimEnd()}\n${exportLine}\n`);
}

const useLine = `@use "./sections/${sectionId}";`;
const stylesContent = existsSync(stylesPath) ? readFileSync(stylesPath, "utf8") : "";

if (!stylesContent.includes(useLine)) {
  const lines = stylesContent.split(/\r?\n/);
  const lastSectionUseIndex = lines.reduce(
    (lastIndex, line, index) => line.startsWith('@use "./sections/') ? index : lastIndex,
    -1,
  );
  const lastUseIndex = lines.reduce(
    (lastIndex, line, index) => line.startsWith("@use ") ? index : lastIndex,
    -1,
  );
  const insertIndex = lastSectionUseIndex >= 0 ? lastSectionUseIndex + 1 : lastUseIndex + 1;

  lines.splice(insertIndex, 0, useLine);
  const nextStylesContent = lines.join("\n");

  writeFileSync(stylesPath, nextStylesContent);
}

console.log(`Section creada: ${sectionName}`);
