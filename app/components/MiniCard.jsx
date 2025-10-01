"use client";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiChakraui, SiFirebase } from "react-icons/si";
import { useInView } from "react-intersection-observer";

export const MiniCard = ({type}) => {
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    return <article ref={ref} style={{opacity: inView ? 1 : 0, transform: inView ? 'translateY(0px)' : 'translateY(50px)', transition: '1s'}} className="miniCard">
        {
            type === 'html' ? <FaHtml5 className="miniCardIcon" color="#FC490B" /> :
            type === 'css' ? <FaCss3Alt className="miniCardIcon" color="#2196F3" /> :
            type === 'js' ? <RiJavascriptFill className="miniCardIcon" color="#F7E018" /> :
            type === 'react' ? <FaReact className="miniCardIcon" color="#4BCADB" /> :
            type === 'next' ? <RiNextjsFill className="miniCardIcon" color="#FFFFFF" /> :
            type === 'reactNative' ? <FaReact className="miniCardIcon" color="#4BCADB" /> :
            type === 'sass' ? <FaSass className="miniCardIcon" color="#C65884" /> :
            type === 'bootstrap' ? <FaBootstrap className="miniCardIcon" color="#6912E9" /> :
            type === 'chakra' ? <SiChakraui className="miniCardIcon" color="#4DB6AC" /> :
            type === 'git' ? <FaGitAlt className="miniCardIcon" color="#DF4B33" /> :
            type === 'github' ? <FaGithub className="miniCardIcon" color="#FFFFFF" /> :
            type === 'firebase' ? <SiFirebase className="miniCardIcon" color="#FF9100" /> : null
        }
        <p className="miniCardText">
            {
            type === 'html' ? 'HTML5' :
            type === 'css' ? 'CSS' :
            type === 'js' ? 'JavaScript' :
            type === 'react' ? 'ReactJS' :
            type === 'next' ? 'NextJS' :
            type === 'reactNative' ? 'React Native' :
            type === 'sass' ? 'Sass' :
            type === 'bootstrap' ? 'Bootstrap' :
            type === 'chakra' ? 'ChakraUI' :
            type === 'git' ? 'Git' :
            type === 'github' ? 'GitHub' :
            type === 'firebase' ? "Firebase" : null
        }
        </p>
    </article>
}