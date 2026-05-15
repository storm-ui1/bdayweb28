"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Polaroid from "@/components/Polaroid";
import { memories } from "@/data/site";
import { fadeUp } from "@/lib/animations";

export default function MemoryTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-18%"]);

  return (
    <div ref={ref} className="relative overflow-hidden px-5 py-24 md:py-32">
      <motion.div className="mx-auto max-w-7xl text-center" {...fadeUp}>
        <p className="font-serif text-sm uppercase tracking-[0.35em] text-rose-blush/70">memory timeline</p>
        <h2 className="mt-3 font-hand text-5xl text-white md:text-7xl">little moments, big memories ♡</h2>
        <p className="mx-auto mt-4 max-w-lg font-serif text-lg text-white/64">some moments i never want to forget.</p>
      </motion.div>

      <div className="relative mx-auto mt-16 max-w-7xl">
        <div className="absolute left-0 right-0 top-10 hidden border-t border-dashed border-rose-blush/55 md:block" />
        <motion.div style={{ x }} className="flex gap-8 overflow-x-auto px-3 pb-8 pt-4 hide-scrollbar md:overflow-visible md:px-10">
          {memories.map((memory, index) => (
            <div key={memory.title} className="relative pt-12">
              <span className="absolute left-1/2 top-0 hidden -translate-x-1/2 font-hand text-4xl text-paper-beige md:block">✦</span>
              <Polaroid
                label={memory.title}
                caption={`${memory.caption} · ${memory.date}`}
                kind={memory.tone}
                image={memory.image}
                rotate={[-4, 3, -2, 4, -5][index]}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <p className="mt-8 text-center font-hand text-2xl text-rose-blush/80">scroll to explore ♡</p>
    </div>
  );
}
