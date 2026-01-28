"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const TEXT =
  "WE DELIVER INNOVATIVE SOLUTIONS TO HELP YOUR STARTUP THRIVE BY STRATEGICALLY BUILDING ITS PRESENCE IN THE MARKET.";

const Word = ({
  word,
  index,
  totalWords,
  progress,
}: {
  word: string;
  index: number;
  totalWords: number;
  progress: MotionValue<number>;
}) => {
  const start = index / totalWords;
  const end = start + 1 / totalWords;

  const color = useTransform(progress, [start, end], ["#d1d5db", "#1a1a2e"]);

  return (
    <motion.span
      className="inline-block mr-[0.25em] sm:mr-[0.35em]"
      style={{ color }}
    >
      {word}
    </motion.span>
  );
};

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = TEXT.split(" ").filter(Boolean);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // ✅ Faster reveal on mobile, smoother on desktop
  const progress = useTransform(
    scrollYProgress,
    [0.1, 0.45],
    [0, 1]
  );

  return (
    <section
      ref={containerRef}
      className="
        w-full
        min-h-[110vh]
        sm:min-h-[120vh]
        bg-white
        relative
      "
    >
      {/* STICKY CONTENT */}
      <div
        className="
          sticky
          top-0
          h-[100svh]
          flex
          items-center
          justify-center
          px-4
          sm:px-6
          md:px-12
          lg:px-20
        "
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* TOP LABEL */}
          <motion.p
            className="
              text-[10px]
              sm:text-[11px]
              md:text-[13px]
              tracking-[0.25em]
              uppercase
              mb-6
              sm:mb-8
              md:mb-10
              text-black
              font-semibold
            "
            style={{ fontFamily: "Inter, sans-serif" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Welcome to midis
          </motion.p>

          {/* WORD-BY-WORD TEXT */}
          <p
            className="
              uppercase
              font-extrabold
              tracking-tight
              leading-[1.15]
              text-[clamp(1.4rem,5.5vw,4rem)]
              sm:text-[clamp(1.8rem,4.8vw,4rem)]
            "
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {words.map((word, i) => (
              <Word
                key={i}
                word={word}
                index={i}
                totalWords={words.length}
                progress={progress}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
