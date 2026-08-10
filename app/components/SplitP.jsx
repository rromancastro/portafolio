"use client";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const SplitP = ({ children, id, className="" }) => {
    gsap.registerPlugin(SplitText);
    const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
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
                });

                gsap.from(splitRef.current.lines, {
                    duration: 3,
                    yPercent: 0,
                    opacity: 0,
                    stagger: 0.1,
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
    }, [inView, id]);

    return <p className={className} style={{opacity: inView ? 1 : 0}} id={id} ref={ref}>
        {children}
    </p>
}
