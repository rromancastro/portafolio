import { MiniCard } from "../components"

export const SecondSection = () => {
    return <section id="secondSection">
        <div id="secondSectionAbout">
            <h2>Sobre mi<span>.</span></h2>
            <p>Soy <span>Román</span>. <span>Desarrollador Front-End</span> especializado en <span>React, NextJS y Firebase.</span> Me apasiona crear soluciones digitales intuitivas y eficientes, enfocadas en <span>diseño responsivo y experiencia de usuario.</span> Mi objetivo es contribuir con creatividad y optimización para impulsar <span>proyectos innovadores</span> que generen <span>impacto real.</span> Busco crecer profesionalmente desarrollando productos que mejoren la <span>interacción entre usuarios y tecnología.</span></p>
        </div>
        <div id="secondSectionSkills">
            <h2>Habilidades <span>:</span></h2>
            <div className="secondSectionSkillsDiv">
                <h3>Front-End</h3>
                <div className="secondSectionSkillsDivMiniCards">
                    <MiniCard type={"html"} />
                    <MiniCard type={"css"} />
                    <MiniCard type={"js"} />
                    <MiniCard type={"react"} />
                    <MiniCard type={"next"} />
                    <MiniCard type={"reactNative"} />
                </div>
            </div>
            <div className="secondSectionSkillsDiv">
                <h3>Estilos</h3>
                <div className="secondSectionSkillsDivMiniCards">
                    <MiniCard type={"sass"} />
                    <MiniCard type={"bootstrap"} />
                    <MiniCard type={"chakra"} />
                </div>
            </div>
            <div className="secondSectionSkillsDiv">
                <h3>Herramientas</h3>
                <div className="secondSectionSkillsDivMiniCards">
                    <MiniCard type={"git"} />
                    <MiniCard type={"github"} />
                    <MiniCard type={"firebase"} />
                </div>
            </div>
        </div>
    </section>
}