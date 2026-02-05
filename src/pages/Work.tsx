"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const projects = [
    { title: "Reisfel", image: "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbf00/690ce952d8b03c10d6625c29_pexels-190703726-11376936-p-1600.jpg" },
    { title: "Delvyes", image: "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbf00/69137d2ded862c6646c1b092_pexels-marcin-tomczak-33520822-7334421-p-1600.jpg" },
    { title: "Clairvy", image: "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbf00/69137b6deeda88efb684c412_pexels-polina-tankilevitch-5581657-p-1600.jpg" },
    { title: "Racely", image: "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbf00/69137d59901483081f697eb2_pexels-beyzaa-yurtkuran-279977530-12990251-p-1600.jpg" },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.33, 1, 0.68, 1] }}
            style={{ scale, rotateX, transformPerspective: 1000 }}
            className="w-full max-w-[900px] mx-auto mb-6"
        >
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] cursor-pointer">
                <motion.div style={{ y }} className="absolute inset-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white">
                        {project.title}
                    </h2>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30" />
            </div>
        </motion.div>
    );
};

const WorkPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-black min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="pt-36 pb-10 px-6">
                <div className="max-w-[900px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl font-medium text-white"
                    >
                        Featured Works
                    </motion.h1>
                </div>
            </section>

            {/* Projects */}
            <section className="px-6 pb-20">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </section>







            <Footer />
        </main>
    );
};

export default WorkPage;
