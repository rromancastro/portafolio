"use client";
import { SplitH2, SplitP } from "../components"
import { FaAngular, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiFramer, SiGsap } from "react-icons/si";
import { useLanguage } from "../i18n";
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

    const { language, t } = useLanguage();
    const isMobile = useIsMobile(768);

    return <section id="secondSection">
        <SplitP key={`point-${language}`} id="secondSectionPoint">
            <span>01 -</span> {t.second.point}
        </SplitP>
        <SplitH2 key={`title-${language}`} id="secondSectionTitle">
            {t.second.titleStart} <span>{t.second.titleHighlightOne}</span> {t.second.titleMiddle} {isMobile ? "" : <br />}
            {t.second.titleLineTwo} {isMobile ? "" : <br />}
            {t.second.titleLineThree}{!isMobile ? "" : <br />} <span>{t.second.titleHighlightTwo}</span>
        </SplitH2>
        <SplitP key={`paragraph-${language}`} id="secondSectionParagraph">
            {t.second.paragraph}
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
