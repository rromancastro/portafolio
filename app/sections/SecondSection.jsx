"use client";
import { SplitH2, SplitP } from "../components"
import { FaAngular, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiFramer, SiGsap } from "react-icons/si";
import { useIsMobile } from "../hooks";

const techIcons = [
    FaReact,
    RiNextjsFill,
    IoLogoJavascript,
    FaAngular,
    FaSass,
    SiGsap,
    SiFramer,
    FaGitAlt,
    FaGithub,
    IoLogoFirebase,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
];

export const SecondSection = () => {

    const isMobile = useIsMobile(768);

    return <section id="secondSection">
        <SplitP id="secondSectionPoint">
            <span>01 -</span> WHAT I DO
        </SplitP>
        <SplitH2 id="secondSectionTitle">
            I turn <span>ideas</span> into {isMobile ? "" : <br />}
            digital experiences {isMobile ? "" : <br />}
            that{!isMobile ? "" : <br />} <span>feel alive.</span>
        </SplitH2>
        <SplitP id="secondSectionParagraph">
            I'm Román Castro, a frontend developer specialized in React and Next.js. I build websites and digital products focused on interaction, performance, and visual detail.
        </SplitP>
        <div className="secondSection__marquee" aria-label="Technologies">
            <div className="secondSection__marqueeTrack">
                {[...techIcons, ...techIcons].map((Icon, index) => (
                    <Icon key={index} aria-hidden="true" />
                ))}
            </div>
        </div>
    </section>
}
