"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function StackedCards() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
        const container = containerRef.current;

        if (!container || cards.length === 0) return;

        const ctx = gsap.context(() => {
            // Pin the entire container while cards stack
            const totalScrollHeight = window.innerHeight * cards.length;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: `+=${totalScrollHeight}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            cards.forEach((card, index) => {
                // First card: animate its content immediately or on scroll
                if (index === 0) {
                    gsap.fromTo(card.querySelectorAll(".animate-text"),
                        { opacity: 0, y: 30, filter: "blur(10px)" },
                        {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            duration: 1.2,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 80%"
                            }
                        }
                    );
                    return;
                }

                // Timeline for subsequent cards
                tl.fromTo(card,
                    {
                        y: "100%",
                        scale: 0.95,
                    },
                    {
                        y: "0%",
                        scale: 1,
                        duration: 2,
                        ease: "none"
                    },
                    index - 1
                );

                // Animate content of the card as it becomes active
                tl.fromTo(card.querySelectorAll(".animate-text"),
                    { opacity: 0, y: 40, filter: "blur(8px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 1,
                        stagger: 0.1,
                        ease: "power2.out"
                    },
                    index - 0.5
                );

                // Previous card effect
                const prevCard = cards[index - 1];
                tl.to(prevCard, {
                    scale: 0.9,
                    opacity: 0.4,
                    filter: "blur(4px)",
                    duration: 2,
                    ease: "none"
                }, index - 1);
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
            <div className="absolute inset-0">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="stack-card absolute top-0 left-0 w-full h-screen flex items-center justify-center px-6 md:px-20"
                        style={{
                            backgroundColor: project.color,
                            zIndex: index + 1
                        }}
                    >
                        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            {/* Text Side */}
                            <div className="order-2 lg:order-1 space-y-8" style={{ color: project.textColor }}>
                                <div className="space-y-4">
                                    <span className="animate-text block text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase opacity-60">
                                        {project.category}
                                    </span>
                                    <h2 className="animate-text text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.85] tracking-tighter uppercase mb-6">
                                        {project.title.split(" ").map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </h2>
                                </div>

                                <div className="animate-text flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
                                    <button className="group relative px-8 py-4 bg-transparent border border-current rounded-full overflow-hidden transition-all duration-500 hover:text-white">
                                        <span className="relative z-10 text-xs font-bold tracking-widest uppercase">VIEW CASE STUDY</span>
                                        <div className="absolute inset-x-0 bottom-0 h-0 bg-current transition-all duration-500 group-hover:h-full -z-0" style={{ backgroundColor: project.textColor === "#FFFFFF" ? "#FFFFFF" : "#000000" }}></div>
                                        <style>{`
                                            .group:hover { color: ${project.textColor === "#FFFFFF" ? "#000000" : "#FFFFFF"} !important; }
                                        `}</style>
                                    </button>
                                    <p className="max-w-xs text-xs md:text-sm font-medium opacity-60 leading-relaxed">
                                        Merging technical precision with artistic flair to redefine digital boundaries.
                                    </p>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="animate-text order-1 lg:order-2 relative aspect-[4/3] lg:aspect-[1.1/1] overflow-hidden rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Index Number */}
                        <div
                            className="absolute bottom-10 left-6 md:bottom-20 md:left-20 text-[10vw] font-black leading-none pointer-events-none select-none opacity-[0.03]"
                            style={{ color: project.textColor }}
                        >
                            0{index + 1}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
