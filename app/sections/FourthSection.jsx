"use client";

import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { SplitH2, SplitP } from "../components";
import { useIsMobile } from "../hooks";

const capabilities = [
    {
        number: "01",
        title: "Front-End Development",
        description: "Interfaces, responsive development, component architecture and interactive experiences.",
        stack: ["REACT", "NEXT.JS", "JAVASCRIPT", "ANGULAR", "SASS"],
    },
    {
        number: "02",
        title: "Back-End Development",
        description: "Authentication, databases, API integrations and backend logic for real-world applications.",
        stack: ["FIREBASE", "FIRESTORE", "FIREBASE AUTH", "Node.js - Basic", "REST APIs"],
    },
    {
        number: "03",
        title: "Motion & Interaction",
        description: "Creating scroll-driven animations, transitions and microinteractions that make digital experiences feel alive.",
        stack: ["GSAP", "FRAMER MOTION", "SCROLLTRIGGER", "CSS MOTION"],
    },
    {
        number: "04",
        title: "Tools & Workflow",
        description: "Tools I use to design, develop, test and deliver production-ready projects.",
        stack: ["GIT", "GITHUB", "FIGMA", "VERCEL", "POSTMAN"],
    },
];

const CapabilityArticle = ({ capability, index }) => {
    const isResponsive = useIsMobile(1025);
    const { ref, inView } = useInView({
        threshold: 0.65,
    });

    return (
        <article ref={ref} className={isResponsive && inView ? "is-in-view" : ""}>
            <SplitP id={`fourthSectionTitleCard${index + 1}`}>
                <span>{capability.number} -</span> {capability.title}
            </SplitP>
            <SplitP id={`fourthSectionSubtitleCard${index + 1}`}>
                {capability.description}
            </SplitP>
            <p>
                {capability.stack.map((item, itemIndex) => (
                    <Fragment key={item}>
                        {itemIndex > 0 && " · "}
                        <span>{item}</span>
                    </Fragment>
                ))}
            </p>
        </article>
    );
};

export const FourthSection = () => {
    return (
        <section id="fourthSection">
            <SplitP id="fourthSectionPoint">
                <span>03 -</span> CAPABILITIES
            </SplitP>
            <SplitH2 id="fourthSectionTitle">
                WHAT I BRING <br />
                TO EVERY PROJECT.
            </SplitH2>
            {capabilities.map((capability, index) => (
                <CapabilityArticle key={capability.number} capability={capability} index={index} />
            ))}
        </section>
    );
};
