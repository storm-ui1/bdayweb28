"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { loveNotes } from "@/data/site";
import { itemPop, stagger } from "@/lib/animations";

export default function LoveSection({ onHeart }: { onHeart: (x: number, y: number) => void }) {
  return (
    <div className="relative overflow-hidden bg-paper-beige/95 px-5 py-24 text-cocoa md:py-32">
      <div className="absolute inset-0 paper-texture" />
      <div className="relative mx-auto max-w-6xl text-center">
        <p className="font-serif text-sm uppercase tracking-[0.35em] text-cocoa/50">tiny reasons</p>
        <h2 className="mt-3 font-hand text-5xl md:text-7xl">things i love about you ♡</h2>
        <p className="mt-3 font-serif text-lg text-cocoa/65">not in order. not enough. but real.</p>
      </div>

      <motion.div
        className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        {...stagger}
      >
        {loveNotes.map((note, index) => (
          <motion.button
            key={note}
            variants={itemPop}
            onClick={(event) => onHeart(event.clientX, event.clientY)}
            className="group relative min-h-40 rounded-sm bg-paper-cream p-6 text-center font-hand text-2xl leading-8 shadow-paper transition hover:-translate-y-2 hover:rotate-0 hover:shadow-glow"
            style={{ rotate: `${[-2, 1, -1, 2, -3][index % 5]}deg` }}
          >
            <span className="absolute -top-3 left-1/2 h-7 w-16 -translate-x-1/2 rotate-2 bg-paper-kraft/40" />
            <Heart className="absolute right-4 top-4 text-rose-dust opacity-0 transition group-hover:fill-rose-dust group-hover:opacity-100" size={18} />
            <span>{note}</span>
          </motion.button>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute bottom-10 left-8 hidden font-hand text-7xl text-cocoa/30 md:block">❀</div>
      <div className="pointer-events-none absolute right-10 top-28 hidden font-hand text-6xl text-cocoa/30 md:block">♡</div>
    </div>
  );
}
