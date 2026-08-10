"use client";

import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 768) => {
    const getIsMobile = () => {
        if (typeof window === "undefined") {
            return false;
        }

        return window.innerWidth < breakpoint;
    };

    const [isMobile, setIsMobile] = useState(getIsMobile);

    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(getIsMobile());
        };

        updateIsMobile();
        window.addEventListener("resize", updateIsMobile);

        return () => {
            window.removeEventListener("resize", updateIsMobile);
        };
    }, [breakpoint]);

    return isMobile;
};
