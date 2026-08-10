"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "roman-portfolio-language";

export const translations = {
    en: {
        nav: {
            whatIDo: "WHAT I DO",
            projects: "PROJECTS",
            capabilities: "CAPABILITIES",
            contact: "CONTACT ME",
        },
        header: {
            title: "ROMÁN CASTRO - CREATIVE  FRONT-END  DEVELOPER",
            role: "CREATIVE FRONTEND DEVELOPER",
            availability: "AVAILABLE FOR PROJECTS",
            imageAlt: "Roman Castro",
        },
        second: {
            point: "WHAT I DO",
            titleStart: "I turn",
            titleHighlightOne: "ideas",
            titleMiddle: "into",
            titleLineTwo: "digital experiences",
            titleLineThree: "that",
            titleHighlightTwo: "feel alive.",
            paragraph:
                "I'm Román Castro, a frontend developer specialized in React and Next.js. I build websites and digital products focused on interaction, performance, and visual detail.",
        },
        third: {
            point: "SELECTED WORK",
            click: "CLICK THE PROJECT TO EXPLORE",
            slides: [
                {
                    heading: "PROJECTS BUILT TO PERFORM. DESIGNED TO BE REMEMBERED.",
                    text1: "",
                },
                {
                    heading: "GAME HOUSE",
                    text1: "An immersive escape room platform with an integrated booking system.",
                },
                {
                    heading: "STEAMLAB",
                    text1: "An immersive digital experience for an audiovisual studio.",
                },
                {
                    heading: "BACAN PLAY",
                    text1: "A playful and interactive website created for a fast-paced card game.",
                },
                {
                    heading: "TML LOGISTICA",
                    text1: "A modern corporate website created to present transport and logistics services with clarity and trust.",
                },
            ],
        },
        fourth: {
            point: "CAPABILITIES",
            titleLineOne: "WHAT I BRING",
            titleLineTwo: "TO EVERY PROJECT.",
            capabilities: [
                {
                    title: "Front-End Development",
                    description: "Interfaces, responsive development, component architecture and interactive experiences.",
                },
                {
                    title: "Back-End Development",
                    description: "Authentication, databases, API integrations and backend logic for real-world applications.",
                },
                {
                    title: "Motion & Interaction",
                    description: "Creating scroll-driven animations, transitions and microinteractions that make digital experiences feel alive.",
                },
                {
                    title: "Tools & Workflow",
                    description: "Tools I use to design, develop, test and deliver production-ready projects.",
                },
            ],
        },
        fifth: {
            titleLineOne: "HAVE AN IDEA?",
            titleLineTwo: "LET'S BUILD IT.",
            paragraph: "Have a project, an opportunity or just an idea? I'd love to hear about it.",
            copyEmail: "Copy email",
            copied: "EMAIL COPIED",
            resume: "DOWNLOAD RESUME",
            credits: "DESIGNED & DEVELOPED BY ROMÁN CASTRO",
        },
        loader: {
            label: "Loading",
            text: "Design. Code. Motion.",
        },
    },
    es: {
        nav: {
            whatIDo: "QUÉ HAGO",
            projects: "PROYECTOS",
            capabilities: "HABILIDADES",
            contact: "CONTACTO",
        },
        header: {
            title: "ROMÁN CASTRO - CREATIVE  FRONT-END  DEVELOPER",
            role: "CREATIVE FRONTEND DEVELOPER",
            availability: "DISPONIBLE PARA PROYECTOS",
            imageAlt: "Roman Castro",
        },
        second: {
            point: "QUÉ HAGO",
            titleStart: "Convierto",
            titleHighlightOne: "ideas",
            titleMiddle: "en",
            titleLineTwo: "experiencias digitales",
            titleLineThree: "que",
            titleHighlightTwo: "se sienten vivas.",
            paragraph:
                "Soy Román Castro, desarrollador frontend especializado en React y Next.js. Construyo sitios web y productos digitales enfocados en interacción, rendimiento y detalle visual.",
        },
        third: {
            point: "TRABAJOS SELECCIONADOS",
            click: "HACÉ CLICK EN EL PROYECTO PARA EXPLORAR",
            slides: [
                {
                    heading: "CREADOS PARA FUNCIONAR. DISEÑADOS PARA DESTACAR.",
                    text1: "",
                },
                {
                    heading: "GAME HOUSE",
                    text1: "Una plataforma inmersiva de escape rooms con sistema de reservas integrado.",
                },
                {
                    heading: "STEAMLAB",
                    text1: "Una experiencia digital inmersiva para un estudio audiovisual.",
                },
                {
                    heading: "BACAN PLAY",
                    text1: "Un sitio web lúdico e interactivo creado para un juego de cartas dinámico.",
                },
                {
                    heading: "TML LOGISTICA",
                    text1: "Un sitio corporativo moderno para presentar servicios de transporte y logística con claridad y confianza.",
                },
            ],
        },
        fourth: {
            point: "HABILIDADES",
            titleLineOne: "MI APORTE",
            titleLineTwo: "EN CADA PROYECTO.",
            capabilities: [
                {
                    title: "Desarrollo Front-End",
                    description: "Interfaces, desarrollo responsive, arquitectura de componentes y experiencias interactivas.",
                },
                {
                    title: "Desarrollo Back-End",
                    description: "Autenticación, bases de datos, integraciones con APIs y lógica backend para aplicaciones reales.",
                },
                {
                    title: "Motion & Interaction",
                    description: "Animaciones con scroll, transiciones y microinteracciones que hacen que las experiencias digitales se sientan vivas.",
                },
                {
                    title: "Herramientas & Workflow",
                    description: "Herramientas que uso para diseñar, desarrollar, probar y entregar proyectos listos para producción.",
                },
            ],
        },
        fifth: {
            titleLineOne: "¿TENÉS UNA IDEA?",
            titleLineTwo: "VIVÁMOSLA.",
            paragraph: "¿Tenés un proyecto, una oportunidad o solo una idea? Me encantaría conocerla.",
            copyEmail: "Copiar email",
            copied: "EMAIL COPIADO",
            resume: "DESCARGAR CV",
            credits: "DISEÑADO Y DESARROLLADO POR ROMÁN CASTRO",
        },
        loader: {
            label: "Cargando",
            text: "Diseño. Código. Movimiento.",
        },
    },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        if (typeof window === "undefined") {
            return "en";
        }

        const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
        if (savedLanguage === "en" || savedLanguage === "es") {
            return savedLanguage;
        }

        return "en";
    });

    useEffect(() => {
        document.documentElement.lang = language;
        window.localStorage.setItem(STORAGE_KEY, language);
    }, [language]);

    const value = useMemo(() => {
        const toggleLanguage = () => {
            setLanguage((currentLanguage) => currentLanguage === "en" ? "es" : "en");
        };

        return {
            language,
            setLanguage,
            toggleLanguage,
            t: translations[language],
        };
    }, [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
};
