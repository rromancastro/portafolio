import { ProjectCard } from "../components"

export const ThirdSection = () => {
    return <section id="thirdSection">
        <h2>Experiencia laboral<span>.</span></h2>
        <ProjectCard
            href={'https://bacanplay.com/'}
            name={'bacan'}
            desc={'Sitio web para BACAN, juego de cartas, es un sitio muy interactivo y con gran cantidad de animaciones.'}
            github={'https://github.com/rromancastro/BACAN'}
            miniCards={'next sass'}
        />
        <ProjectCard
            href={'https://streamlab.com.ar/'}
            name={'stream lab'}
            desc={'Sitio web para Stream Lab, estudio de streaming, sitio informativo con un diseño moderno y una gran cantidad de animaciones.'}
            github={'https://github.com/rromancastro/BACAN'}
            invert={true}
            miniCards={'next sass'}
        />
        <ProjectCard
            href={'https://tmlogistica.com.ar/'}
            name={'tml logistica'}
            desc={'Sitio web corporativo desarrollado para TML Logística, orientado a presentar servicios de transporte y logística de manera clara, moderna y profesional.'}
            github={'https://github.com/rromancastro/tml-logistica'}
            miniCards={'angular sass'}
        />
        <ProjectCard
            invert={true}
            href={'https://gamehouseba.vercel.app/'}
            name={'game house'}
            desc={'Plataforma web moderna para Game House BA, enfocada en brindar una experiencia visual atractiva e intuitiva para la presentación de juegos de escape e incluyendo un sistema de reservas.'}
            github={'https://github.com/rromancastro/gamehouseba'}
            enDesarrollo={true}
            miniCards={'next sass firebase framer'}
        />
        <ProjectCard
            href={'https://humint-tan.vercel.app/en'}
            name={'humint'}
            desc={'Desarrollo de una aplicación web multilingüe utilizando Next.js, React y tecnologías modernas de frontend, enfocada en la presentación y análisis de información. Implementación de diseño responsive, optimización SEO, rendimiento web y experiencia de usuario, siguiendo buenas prácticas de desarrollo y escalabilidad.'}
            github={'https://github.com/rromancastro/humint'}
            enDesarrollo={true}
            miniCards={'next sass gsap'}
        />
        <ProjectCard
            href={'https://topquin.vercel.app/'}
            name={'topquin energy'}
            desc={'Sitio web informativo para una empresa especializada en energía renovable, con un diseño moderno y una gran cantidad de animaciones.'}
            github={'https://github.com/rromancastro/topquin'}
            enDesarrollo={true}
            invert={true}
            miniCards={'next sass'}
        />
        <ProjectCard
            href={'https://easylunch-iota.vercel.app/'}
            name={'easy lunch'}
            desc={'Sitio web informativo para una empresa de comida corporativa.'}
            github={'https://github.com/rromancastro/easylunch'}
            enDesarrollo={true}
            miniCards={'next sass'}
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
        <ProjectCard
            href={'https://www.youtube.com/watch?v=O2akN3uFufg'}
            name={'miclase'}
            desc={'Proyecto desarrollado en ReactNative. Aula virtual tipo Classroom. Utilicé Firebase para la autenticación y almacenamiento de datos, permitiendo a los usuarios registrarse,  iniciar sesión, acceder a sus cursos de manera segura y utilizar el servicio de mensajería.'}
            github={'https://github.com/rromancastro/MiClase'}
            miniCards={'reactNative firebase'}
        />
    </section>

}


