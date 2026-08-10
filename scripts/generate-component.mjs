import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const [, , rawName] = process.argv;

if (!rawName) {
  console.error("Uso: npm run component Nombre");
  process.exit(1);
}

const toPascalCase = (value) =>
  value
    .replace(/Component$/i, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

const baseName = toPascalCase(rawName);

if (!baseName || !/^[A-Z][a-zA-Z0-9]*$/.test(baseName)) {
  console.error("El nombre del componente debe contener letras o numeros validos.");
  process.exit(1);
}

const componentName = `${baseName}Component`;
const componentId = `${componentName.charAt(0).toLowerCase()}${componentName.slice(1)}`;
const root = process.cwd();
const componentsDir = path.join(root, "app", "components");
const scssComponentsDir = path.join(root, "app", "sass", "components");
const componentPath = path.join(componentsDir, `${componentName}.jsx`);
const scssPath = path.join(scssComponentsDir, `_${componentId}.scss`);
const indexPath = path.join(componentsDir, "index.js");
const stylesPath = path.join(root, "app", "sass", "styles.scss");

if (existsSync(componentPath)) {
  console.error(`Ya existe ${path.relative(root, componentPath)}.`);
  process.exit(1);
}

if (existsSync(scssPath)) {
  console.error(`Ya existe ${path.relative(root, scssPath)}.`);
  process.exit(1);
}

mkdirSync(componentsDir, { recursive: true });
mkdirSync(scssComponentsDir, { recursive: true });

writeFileSync(
  componentPath,
  `export const ${componentName} = () => {\n    return <div id="${componentId}">\n    </div>\n}\n`,
);

writeFileSync(scssPath, `#${componentId} {\n}\n`);

const exportLine = `export * from "./${componentName}";`;
const indexContent = existsSync(indexPath) ? readFileSync(indexPath, "utf8") : "";

if (!indexContent.includes(exportLine)) {
  writeFileSync(indexPath, `${indexContent.trimEnd()}\n${exportLine}\n`);
}

const useLine = `@use "./components/${componentId}";`;
const stylesContent = existsSync(stylesPath) ? readFileSync(stylesPath, "utf8") : "";

if (!stylesContent.includes(useLine)) {
  const leadingCommentMatch = stylesContent.match(/^(?:\/\/.*\r?\n)*/);
  const leadingComment = leadingCommentMatch?.[0] ?? "";
  const restContent = stylesContent.slice(leadingComment.length);
  const useMatch = restContent.match(/^((?:@use .+;\r?\n)+)/);
  const nextStylesContent = useMatch
    ? `${leadingComment}${useMatch[1]}${useLine}\n${restContent.slice(useMatch[1].length)}`
    : `${leadingComment}${useLine}\n${restContent}`;

  writeFileSync(stylesPath, nextStylesContent);
}

console.log(`Componente creado: ${componentName}`);
