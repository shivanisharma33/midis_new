"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ScrollingVideoZoom = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoWrapperRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=150%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // Zoom animation
            tl.fromTo(
                videoWrapperRef.current,
                {
                    scale: 0.5,
                    borderRadius: "50%",
                    width: "40vw",
                    height: "40vw",
                },
                {
                    scale: 1,
                    borderRadius: "0px",
                    width: "100%",
                    height: "100vh",
                    ease: "power2.inOut",
                }
            );

            // Fade out button as we zoom in
            if (buttonRef.current) {
                tl.to(buttonRef.current, {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.3,
                }, 0.1);
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-white">
            <div className="h-screen w-full flex items-center justify-center">
                <div
                    ref={videoWrapperRef}
                    className="relative overflow-hidden bg-neutral-900"
                >
                    <video
                        ref={videoRef}
                        src="/images/18069786-uhd_2160_3840_30fps.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />

                    {/* Central Play/Pause Button - Premium Aesthetic */}
                    <div
                        ref={buttonRef}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="relative">
                            {/* Outer ring */}
                            <div className="absolute inset-0 -m-8 rounded-full border border-white/20 animate-pulse" />

                            <button
                                onClick={togglePlay}
                                className="pointer-events-auto relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center group shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-110 transition-all duration-500"
                            >
                                <div className="flex items-center justify-center text-black">
                                    {isPlaying ? (
                                        <Pause size={32} className="fill-black" />
                                    ) : (
                                        <Play size={32} className="fill-black translate-x-1" />
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
