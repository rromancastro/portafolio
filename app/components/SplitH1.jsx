"use client";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const SplitH1 = ({ children, id, opacity=0, threshold=1, lineStagger=0.1 }) => {
    gsap.registerPlugin(SplitText);
    const { ref, inView } = useInView({ threshold: threshold, triggerOnce: true });
    const splitRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    useLayoutEffect(() => {
        let isMounted = true;

        if (inView && !hasAnimatedRef.current) {
            document.fonts.ready.then(() => {
                if (!isMounted) {
                    return;
                }

                gsap.set(`#${id}`, { opacity: 1 });

                splitRef.current = SplitText.create(`#${id}`, {
                    type: "words,lines",
                    linesClass: "line",
                    autoSplit: true,
                    mask: "lines",
                });

                gsap.from(splitRef.current.lines, {
                    duration: 3,
                    yPercent: 110,
                    opacity: opacity,
                    stagger: lineStagger,
                    ease: "expo.out",
                });

                hasAnimatedRef.current = true;
            });
        }

        return () => {
            isMounted = false;
            if (splitRef.current) {
                gsap.killTweensOf(splitRef.current.lines);
                splitRef.current.revert();
                splitRef.current = null;
            }
        };
    }, [inView, id, lineStagger, opacity]);

    return <h1 style={{opacity: inView ? 1 : 0}} id={id} ref={ref}>
        {children}
    </h1>
}
