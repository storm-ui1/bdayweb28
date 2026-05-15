"use client";

import { motion } from "framer-motion";
import { Heart, Music, Music2, Volume2, VolumeX } from "lucide-react";
import { fadeUp } from "@/lib/animations";

type Props = {
  ambient: boolean;
  setAmbient: (value: boolean) => void;
  onHeart: (x: number, y: number) => void;
};

export default function HeroSection({ ambient, setAmbient, onHeart }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20">
      <NightSky />
      <Clouds />

      <button
        aria-label="toggle ambient music"
        onClick={() => setAmbient(!ambient)}
        className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-white/10 p-3 text-rose-blush backdrop-blur-xl transition hover:scale-105 hover:bg-white/15 hover:shadow-glow md:right-10 md:top-9"
      >
        {ambient ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      <motion.div className="relative z-10 max-w-4xl text-center" {...fadeUp}>
        <motion.div
          className="mx-auto mb-8 h-28 w-28 rounded-full bg-paper-cream shadow-moon"
          animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-full w-full rounded-full bg-night-800 translate-x-6 -translate-y-1" />
        </motion.div>
        <p className="mb-5 font-serif text-sm uppercase tracking-[0.45em] text-white/55">a birthday website</p>
        <h1 className="font-hand text-6xl leading-none text-white drop-shadow-[0_0_28px_rgba(255,143,171,0.35)] md:text-8xl lg:text-9xl">
          hey, it&apos;s your day ♡
        </h1>
        <p className="mx-auto mt-7 max-w-xl font-serif text-xl leading-8 text-white/78 md:text-2xl">
          a small place on the internet, made just for you.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#section-1"
            className="group inline-flex items-center gap-3 rounded-full border border-rose-blush/50 bg-rose-blush/10 px-8 py-4 font-serif text-lg text-white shadow-glow backdrop-blur-xl transition hover:-translate-y-1 hover:border-rose-blush hover:bg-rose-blush/20"
          >
            come in <Heart className="transition group-hover:fill-rose-blush" size={18} />
          </a>
          <button
            onClick={(event) => onHeart(event.clientX, event.clientY)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 backdrop-blur-xl transition hover:bg-white/10 hover:text-rose-blush"
          >
            <Music2 size={16} /> send a tiny heart
          </button>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-rose-blush"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <Music size={16} className="mx-auto mb-2 opacity-60" />
        <span className="font-hand text-2xl">⌄</span>
      </motion.div>
    </div>
  );
}

function NightSky() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-night-radial" />
      {Array.from({ length: 72 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white/80 transition hover:bg-rose-blush hover:shadow-glow"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 23) % 85}%`,
            width: `${(index % 3) + 2}px`,
            height: `${(index % 3) + 2}px`
          }}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.25, 0.8] }}
          transition={{ duration: 2.8 + (index % 5), repeat: Infinity, delay: index * 0.04 }}
        />
      ))}
    </div>
  );
}

function Clouds() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-2/5 overflow-hidden opacity-75">
      {[0, 1, 2, 3].map((cloud) => (
        <motion.div
          key={cloud}
          className="absolute bottom-[-20%] h-56 w-[36rem] rounded-[50%] bg-gradient-to-t from-rose-blush/30 to-paper-cream/10 blur-2xl"
          style={{ left: `${cloud * 26 - 10}%` }}
          animate={{ x: [0, 38, 0], y: [0, -12, 0] }}
          transition={{ duration: 10 + cloud * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
