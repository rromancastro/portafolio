"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Waves } from "../components";
import { RiArrowDownDoubleFill } from "react-icons/ri";

gsap.registerPlugin(SplitText);

export const HeaderSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
    }, []);

    const moveImageGlow = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;

        event.currentTarget.style.setProperty("--cursor-x", `${x}%`);
        event.currentTarget.style.setProperty("--cursor-y", `${y}%`);
    };

    return (
        <section
            id="headerSection"
            ref={sectionRef}
            onMouseMove={moveImageGlow}
            onMouseEnter={(event) => event.currentTarget.style.setProperty("--glow-opacity", "1")}
            onMouseLeave={(event) => event.currentTarget.style.setProperty("--glow-opacity", "0")}
        >
            <img src="/roman.png" alt="Roman Castro" className="headerSection__image" />
            <div className="headerSection__imageGlow" aria-hidden="true" />
            <Waves />
            <section id="headerContent">
                <div className="headerTitleMarquee">
                    <h1 id="headerTitle" ref={titleRef}>
                        ROMÁN CASTRO - CREATIVE  FRONT-END  DEVELOPER
                    </h1>
                    <h1 aria-hidden="true">
                        ROMÁN CASTRO - CREATIVE  FRONT-END  DEVELOPER
                    </h1>
                </div>
            </section>
            <p>CREATIVE FRONTEND DEVELOPER</p>
            <p>AVAILABLE FOR PROJECTS</p>
        </section>
    );
};
