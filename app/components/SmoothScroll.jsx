"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        window.lenis = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        const update = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        const handleAnchorClick = (event) => {
            const link = event.target.closest("a[href^='#']");

            if (!link) {
                return;
            }

            const href = link.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const targetId = decodeURIComponent(href.slice(1));
            const target = document.getElementById(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();
            window.history.pushState(null, "", href);
            lenis.scrollTo(target);
        };

        document.addEventListener("click", handleAnchorClick, true);

        return () => {
            document.removeEventListener("click", handleAnchorClick, true);
            gsap.ticker.remove(update);
            delete window.lenis;
            lenis.destroy();
        };
    }, []);

    return null;
};
