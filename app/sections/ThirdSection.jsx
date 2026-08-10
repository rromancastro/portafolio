"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLanguage } from "../i18n";

gsap.registerPlugin(ScrollTrigger, SplitText);

const baseSlides = [
    {
        heading: "PROJECTS BUILT TO PERFORM. DESIGNED TO BE REMEMBERED.",
        text1: "",
        text2: "CLICK THE PROJECT TO EXPLORE",
        mediaType: "image",
        media: "/thirdSection.png",
        href: "",
    },
    {
        heading: "GAME HOUSE",
        text1: "An immersive escape room platform with an integrated booking system.",
        text2: "NEXT.JS · FIREBASE · GSAP · FRAMER-MOTION · SASS",
        mediaType: "video",
        media: "/projects/gamehouse.mp4",
        href: "https://www.gamehouseba.com/es",
    },
    {
        heading: "STEAMLAB",
        text1: "An immersive digital experience for an audiovisual studio.",
        text2: "NEXT.JS · FRAMER MOTION · SASS",
        mediaType: "video",
        media: "/projects/streamlab.mp4",
        href: "https://streamlab.com.ar/",
    },
    {
        heading: "BACAN PLAY",
        text1: "A playful and interactive website created for a fast-paced card game.",
        text2: "NEXT.JS · SASS",
        mediaType: "video",
        media: "/projects/bacan.mp4",
        href: "https://bacanplay.com/",
    },
    {
        heading: "TML LOGISTICA",
        text1: "A modern corporate website created to present transport and logistics services with clarity and trust.",
        text2: "ANGULAR · SASS",
        mediaType: "video",
        media: "/projects/tmlogistica.mp4",
        href: "https://tmlogistica.com.ar/",
    },
];

export const ThirdSection = () => {
    const { language, t } = useLanguage();
    const sectionRef = useRef(null);
    const slides = useMemo(() => baseSlides.map((slide, index) => ({
        ...slide,
        ...t.third.slides[index],
        text2: index === 0 ? t.third.click : slide.text2,
    })), [t]);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray(".thirdSection__panel");
            const backgrounds = gsap.utils.toArray(".thirdSection__bg");
            const headings = gsap.utils.toArray(".thirdSection__heading");
            const texts = gsap.utils.toArray(".thirdSection__text");
            const progressFills = gsap.utils.toArray(".thirdSection__progressFill");
            const outerWrappers = gsap.utils.toArray(".thirdSection__outer");
            const innerWrappers = gsap.utils.toArray(".thirdSection__inner");
            const splitHeadings = headings.map((heading) => SplitText.create(heading, {
                type: "chars,words,lines",
                linesClass: "thirdSection__clipText",
            }));
            let currentIndex = -1;
            let sectionTrigger;
            let activeTimeline;

            gsap.set(outerWrappers, { yPercent: 100 });
            gsap.set(innerWrappers, { yPercent: -100 });
            gsap.set(progressFills, { scaleY: 0, transformOrigin: "top" });

            const gotoSlide = (index, direction) => {
                if (index === currentIndex) {
                    return;
                }

                activeTimeline?.kill();

                const fromTop = direction === -1;
                const directionFactor = fromTop ? -1 : 1;
                const timeline = gsap.timeline({
                    defaults: {
                        duration: 1.25,
                        ease: "power1.inOut",
                    },
                    onComplete: () => {
                        activeTimeline = null;
                    },
                });
                activeTimeline = timeline;

                if (currentIndex >= 0) {
                    gsap.set(panels[currentIndex], { zIndex: 0 });
                    timeline
                        .to(backgrounds[currentIndex], { yPercent: -15 * directionFactor })
                        .set(panels[currentIndex], { autoAlpha: 0 });
                }

                gsap.set(panels[index], { autoAlpha: 1, zIndex: 1 });
                timeline
                    .fromTo(
                        [outerWrappers[index], innerWrappers[index]],
                        { yPercent: (i) => (i ? -100 * directionFactor : 100 * directionFactor) },
                        { yPercent: 0 },
                        0
                    )
                    .fromTo(backgrounds[index], { yPercent: 15 * directionFactor }, { yPercent: 0 }, 0)
                    .fromTo(
                        texts.filter((text) => text.dataset.slideIndex === String(index)),
                        {
                            autoAlpha: 0,
                            yPercent: 70 * directionFactor,
                        },
                        {
                            autoAlpha: 1,
                            yPercent: 0,
                            duration: 1,
                            ease: "power2.out",
                            stagger: 0.08,
                        },
                        0.35
                    )
                    .fromTo(
                        splitHeadings[index].chars,
                        {
                            autoAlpha: 0,
                            yPercent: 150 * directionFactor,
                        },
                        {
                            autoAlpha: 1,
                            yPercent: 0,
                            duration: 1,
                            ease: "power2",
                            stagger: {
                                each: 0.02,
                                from: "random",
                            },
                        },
                        0.2
                    );

                currentIndex = index;
            };

            sectionTrigger = ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: () => `+=${window.innerHeight * panels.length}`,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    section.style.setProperty("--third-progress", self.progress);
                    gsap.set(progressFills, {
                        scaleY: (index) => gsap.utils.clamp(0, 1, (self.progress * panels.length) - index),
                    });

                    const nextIndex = Math.min(
                        panels.length - 1,
                        Math.floor(self.progress * panels.length)
                    );
                    const direction = self.direction === -1 ? -1 : 1;

                    gotoSlide(nextIndex, direction);
                },
            });

            gotoSlide(0, 1);

            return () => {
                activeTimeline?.kill();
                sectionTrigger.kill();
                splitHeadings.forEach((split) => split.revert());
            };
        }, section);

        return () => ctx.revert();
    }, [language, slides]);

    return (
        <section id="thirdSection" ref={sectionRef}>
            <div className="thirdSection__header">
                <p><span>02 - </span>{t.third.point}</p>
            </div>
            <div className="thirdSection__progress" aria-hidden="true">
                {slides.map((slide, index) => (
                    <span
                        className="thirdSection__progressStep"
                        key={`${language}-${index}`}
                    >
                        <span className="thirdSection__progressFill" />
                    </span>
                ))}
            </div>
            {slides.map((slide, index) => (
                <div className="thirdSection__panel" key={`${language}-${slide.heading}`}>
                    <div className="thirdSection__outer">
                        <div className="thirdSection__inner">
                            <div className="thirdSection__bg">
                                {slide.mediaType === "video" ? (
                                    <video
                                        className="thirdSection__media"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    >
                                        <source src={slide.media} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        className="thirdSection__media"
                                        src={slide.media}
                                        alt=""
                                        aria-hidden="true"
                                    />
                                )}
                                {slide.href === "#" ? (
                                    <div className="thirdSection__link">
                                        <h2 className="thirdSection__heading">{slide.heading}</h2>
                                        <p className="thirdSection__text" data-slide-index={index}>{slide.text1}</p>
                                        <p className="thirdSection__text" data-slide-index={index}>{slide.text2}</p>
                                    </div>
                                ) : (
                                    <a target="_blank" rel="noreferrer" className="thirdSection__link" href={slide.href}>
                                    <h2 className="thirdSection__heading">{slide.heading}</h2>
                                    <p className="thirdSection__text" data-slide-index={index}>{slide.text1}</p>
                                    <p className="thirdSection__text" data-slide-index={index}>{slide.text2}</p>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
