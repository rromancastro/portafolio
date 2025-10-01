import { Waves } from "../components"
import { FaRocket, FaGithub, FaLinkedinIn} from "react-icons/fa";


export const FirstSection = () => {
    return (
      <section id="firstSection">
        <Waves />
        <section id="firstSectionContent">
          <h1>Román Castro</h1>
          <p>FRONT-END DEVELOPER <FaRocket /></p>

          <div id="headerUtilities">
            <a id="descargarCurriculum" download={true} href="/CV-RomanCastro.pdf">Descargar Curriculum</a>
            <a target="_blank" className="redSocial" href="https://github.com/rromancastro"><FaGithub className="redSocialIcon"/></a>
            <a target="_blank" className="redSocial" href="https://www.linkedin.com/in/roman-castro-52679b321/"><FaLinkedinIn className="redSocialIcon"/></a>
          </div>
        </section>
      </section>
    )
}