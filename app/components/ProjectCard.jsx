"use client"; 
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MiniCard } from ".";
import { useInView } from "react-intersection-observer";

export const ProjectCard = ({href, github, name, desc, invert = false, miniCards, enDesarrollo = false}) => {

    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    return <div ref={ref} style={{gridTemplateColumns: invert ? "55% 45%" : "45% 55%", boxShadow: invert ? '-2px 2px 0px #4099AE' : '2px 2px 0px #4099AE', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0px)' : 'translateY(50px)', transition: '.5s'}} target="_blank" href={href} className="projectCard">
        <Image style={{order: invert ? 2 : 1}} onClick={() => window.open(href, "_blank")} className="projectCardImage" src={`/projects/${name}.png`} alt={name + " screenshot"} width={1280} height={720} />
        <div style={{order: invert ? 1 : 2}} className="projectCardContent">
            <h3 className="projectCardContentTitle">{String(name).toUpperCase()}<span>.</span><a target="_blank" href={github}><FaGithub color="#FAFAFA" /></a><a href={href} target="_blank"><FaExternalLinkAlt color="#FAFAFA" /></a>{enDesarrollo ? "(EN DESARROLLO)" : null}</h3>
            <p className="projectCardContentText">{desc}</p>
            <div className="projectCardContentMiniCards">
                {
                    String(miniCards).includes('next') ? <MiniCard type={"next"} /> : null
                }
                {
                    String(miniCards).includes('react') ? <MiniCard type={"react"} /> : null
                }
                {
                    String(miniCards).includes('sass') ? <MiniCard type={"sass"} /> : null
                }
                {
                    String(miniCards).includes('bootstrap') ? <MiniCard type={"bootstrap"} /> : null
                }
                {
                    String(miniCards).includes('chakra') ? <MiniCard type={"chakra"} /> : null
                }
                {
                    String(miniCards).includes('git') ? <MiniCard type={"git"} /> : null
                }
                {
                    String(miniCards).includes('github') ? <MiniCard type={"github"} /> : null
                }
                {
                    String(miniCards).includes('firebase') ? <MiniCard type={"firebase"} /> : null
                }
            </div>
        </div>
    </div>
}