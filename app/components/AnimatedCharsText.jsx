"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const allowedTags = new Set(["h1", "h2", "h3", "p", "span"]);

export const AnimatedCharsText = ({
    as = "h1",
    children,
    className = "",
    delay = 0,
    duration = 0.7,
    stagger = 0.04,
    x = 150,
    ease = "power4",
}) => {
    const textRef = useRef(null);
    const Tag = allowedTags.has(as) ? as : "h1";

    useEffect(() => {
        const text = textRef.current;

        if (!text) {
            return;
        }

        const split = SplitText.create(text, {
            type: "chars",
        });

        const animation = gsap.from(split.chars, {
            x,
            opacity: 0,
            duration,
            delay,
            ease,
            stagger,
        });

        return () => {
            animation.revert();
            split.revert();
        };
    }, [delay, duration, ease, stagger, x, children]);

    return (
        <Tag ref={textRef} className={`animated-chars-text ${className}`.trim()}>
            {children}
        </Tag>
    );
};
