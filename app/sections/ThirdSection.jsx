import { ProjectCard } from "../components"

export const ThirdSection = () => {
    return <section id="thirdSection">
        <h2>Experiencia laboral<span>.</span></h2>
        <ProjectCard
            href={'https://bacan-romancastro.vercel.app/'}
            name={'bacan'}
            desc={'Sitio web para BACAN, juego de cartas, es un sitio muy interactivo y con gran cantidad de animaciones.'}
            github={'https://github.com/rromancastro/BACAN'}
            miniCards={'next sass'}
            enDesarrollo={true}
        />
        <ProjectCard
            href={'https://stream-lab-romancastro.vercel.app/'}
            name={'stream lab'}
            desc={'Sitio web para Stream Lab, estudio de streaming, sitio informativo con un diesño moderno y una gran cantidad de animaciones.'}
            github={'https://github.com/rromancastro/BACAN'}
            invert={true}
            miniCards={'next sass'}
            enDesarrollo={true}
        />
        <h2>Proyectos personales<span>.</span></h2>
        <ProjectCard
            href={'https://tesla-romancastro.vercel.app/'}
            name={'tesla'}
            desc={'En este proyecto profundicé mis conocimientos en NextJS, desarrollando un E-Commerce, creando una interfaz responsiva y visualmente atractiva que emula la experiencia de usuario del sitio original de Tesla.'}
            github={'https://github.com/rromancastro/Tesla-RomanCastro'}
            miniCards={'next sass firebase'}
        />
        <ProjectCard
            href={'https://boca-juniors-react.vercel.app/'}
            name={'boca store'}
            desc={'Sitio desarrollado con React, presentado como Proyecto Final para el curso de ReactJS en CoderHouse. Simulando un E-Commerce orientado a la venta de indumentaria deportiva.'}
            github={'https://github.com/rromancastro/BocaJuniors-React'}
            miniCards={'react sass firebase chakra'}
            invert={true}
        />
    </section>
}