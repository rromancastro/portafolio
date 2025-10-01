import { FaRocket } from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav>
            <p>RC<FaRocket /></p>
            <div id="navLinks">
                <a download={true} href="/CV-RomanCastro.pdf">CURRICULUM</a>
                <a href="#secondSection">SOBRE MI</a>
                <a href="#thirdSection">EXPERIENCIA</a>
                <a href="#fourthSection">CONTACTO</a>
            </div>
        </nav>
    )
}