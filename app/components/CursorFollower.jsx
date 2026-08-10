"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const CursorFollower = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        if (!cursor) {
            return;
        }

        const desktopQuery = window.matchMedia("(min-width: 1025px)");
        let cleanupCursor = () => {};

        const enableCursor = () => {
            gsap.set(cursor, {
                xPercent: -50,
                yPercent: -50,
                opacity: 0,
            });

            const xTo = gsap.quickTo(cursor, "x", {
                duration: 0.6,
                ease: "power3",
            });
            const yTo = gsap.quickTo(cursor, "y", {
                duration: 0.6,
                ease: "power3",
            });

            const showCursor = () => {
                gsap.to(cursor, {
                    opacity: 1,
                    duration: 0.2,
                });
            };

            const hideCursor = () => {
                gsap.to(cursor, {
                    opacity: 0,
                    duration: 0.2,
                });
            };

            const moveCursor = (event) => {
                gsap.to(cursor, {
                    opacity: 1,
                    duration: 0.2,
                });
                xTo(event.clientX);
                yTo(event.clientY);
            };

            window.addEventListener("mousemove", moveCursor);
            window.addEventListener("mouseenter", showCursor);
            window.addEventListener("mouseleave", hideCursor);

            return () => {
                window.removeEventListener("mousemove", moveCursor);
                window.removeEventListener("mouseenter", showCursor);
                window.removeEventListener("mouseleave", hideCursor);
                gsap.set(cursor, { opacity: 0 });
            };
        };

        const syncCursor = () => {
            cleanupCursor();
            cleanupCursor = desktopQuery.matches ? enableCursor() : () => {};
            if (!desktopQuery.matches) {
                gsap.set(cursor, { opacity: 0 });
            }
        };

        syncCursor();
        desktopQuery.addEventListener("change", syncCursor);

        return () => {
            desktopQuery.removeEventListener("change", syncCursor);
            cleanupCursor();
        };
    }, []);

    return <div ref={cursorRef} className="cursor-follower" aria-hidden="true" />;
};
