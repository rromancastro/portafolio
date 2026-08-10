"use client";  
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { useLanguage } from "../i18n";
import { useIsMobile } from "../hooks";

export const NavbarComponent = () => {

    const { language, toggleLanguage, t } = useLanguage();
    const [hoverLogo, setHoverLogo] = useState(false);
    const [navStep, setNavStep] = useState(0);
    const openTimeout = useRef(null);
    const closeTimeout = useRef(null);

    const isMobile = useIsMobile(1024);

    const clearNavTimers = () => {
        if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = null;
        }

        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
    };

    const openNavbar = () => {
        clearNavTimers();
        setNavStep(1);
        openTimeout.current = setTimeout(() => {
            setNavStep(2);
            openTimeout.current = null;
        }, 450);
    };

    const closeNavbar = () => {
        clearNavTimers();
        setNavStep(1);
        closeTimeout.current = setTimeout(() => {
            setNavStep(0);
            closeTimeout.current = null;
        }, 450);
    };

    useEffect(() => {
        return clearNavTimers;
    }, []);

    return <nav style={{width: navStep >= 1 ? isMobile ? '280px' : '500px' : '150px', maxHeight: navStep == 2 ? '1000px' : '65px'}} onMouseEnter={openNavbar} onMouseLeave={closeNavbar} id="navbarComponent" data-nav-step={navStep}>
        <div id="nav">
                <svg
                    onMouseEnter={() => setHoverLogo(true)}
                    onMouseLeave={() => setHoverLogo(false)}
                    width="191"
                    height="130"
                    viewBox="0 0 191 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="navbar-logo-path navbar-logo-path--base"
                        d="M190.254 62.3874L128.616 0.729871C128.152 0.265408 127.505 0 126.841 0H65.9002C63.6609 0 62.533 2.70384 64.1254 4.29629L118.863 59.0366C120.455 60.6291 119.327 63.3329 117.088 63.3329H64.2083C63.5448 63.3329 62.8979 63.5983 62.4335 64.0628L0.745809 125.704C-0.846559 127.296 0.281369 130 2.52064 130H32.1453H62.9643C64.3576 130 65.4855 128.872 65.4855 127.479V75.044C65.4855 72.8047 68.2058 71.6767 69.7816 73.2691L125.763 129.27C126.228 129.735 126.875 130 127.538 130H188.479C190.719 130 191.847 127.296 190.254 125.704L135.533 70.9634C133.941 69.3709 135.069 66.6671 137.308 66.6671H188.479C190.719 66.6671 191.847 63.9633 190.254 62.3708V62.3874Z"
                        fill="white"
                    />
                    <path
                        className={`navbar-logo-path navbar-logo-path--gradient ${hoverLogo ? "is-visible" : ""}`}
                        d="M190.254 62.3874L128.616 0.729871C128.152 0.265408 127.505 0 126.841 0H65.9002C63.6609 0 62.533 2.70384 64.1254 4.29629L118.863 59.0366C120.455 60.6291 119.327 63.3329 117.088 63.3329H64.2083C63.5448 63.3329 62.8979 63.5983 62.4335 64.0628L0.745809 125.704C-0.846559 127.296 0.281369 130 2.52064 130H32.1453H62.9643C64.3576 130 65.4855 128.872 65.4855 127.479V75.044C65.4855 72.8047 68.2058 71.6767 69.7816 73.2691L125.763 129.27C126.228 129.735 126.875 130 127.538 130H188.479C190.719 130 191.847 127.296 190.254 125.704L135.533 70.9634C133.941 69.3709 135.069 66.6671 137.308 66.6671H188.479C190.719 66.6671 191.847 63.9633 190.254 62.3708V62.3874Z"
                        fill="url(#navbarLogoGradient)"
                    />
                    <defs>
                        <linearGradient id="navbarLogoGradient" x1="0" y1="65" x2="191" y2="65" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#08090A" />
                            <stop offset="1" stopColor="#007AE7" />
                        </linearGradient>
                    </defs>
                </svg>
            
            <button type="button" onClick={toggleLanguage} aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}>
                {language === "en" ? "ES" : "EN"}
            </button>
        </div>
        <div id="navDrop">
            <Link href="#secondSection" onClick={closeNavbar}>
                {t.nav.whatIDo} <BsArrowUpRightSquareFill />
            </Link>
            <Link href="#thirdSection" onClick={closeNavbar}>
                {t.nav.projects} <BsArrowUpRightSquareFill />
            </Link>
            <Link href="#fourthSection" onClick={closeNavbar}>
                {t.nav.capabilities} <BsArrowUpRightSquareFill />
            </Link>
            <Link href="#fifthSection" onClick={closeNavbar}>
                {t.nav.contact} <BsArrowUpRightSquareFill />
            </Link>
        </div>
    </nav>
}
