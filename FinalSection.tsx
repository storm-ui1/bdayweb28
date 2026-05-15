"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Polaroid from "@/components/Polaroid";
import { finalPhotos } from "@/data/site";
import { fadeUp } from "@/lib/animations";

export default function FinalSection({ onHeart }: { onHeart: (x: number, y: number) => void }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,143,171,.24),transparent_30%),linear-gradient(180deg,#090912,#17101f_55%,#08080f)]" />
      <Confetti />
      <Balloons />
      <Fireflies />
      <div className="pointer-events-auto absolute inset-x-0 top-24 z-10 mx-auto hidden max-w-6xl justify-between px-8 lg:flex">
        {finalPhotos.map((photo) => (
          <Polaroid
            key={photo.label}
            label={photo.label}
            kind={photo.kind}
            image={photo.image}
            rotate={photo.rotate}
            draggable
          />
        ))}
      </div>

      <motion.div className="relative z-10 mx-auto max-w-4xl" {...fadeUp}>
        <Sparkles className="mx-auto mb-6 text-rose-blush" size={42} />
        <h2 className="font-hand text-6xl leading-none text-rose-blush drop-shadow-[0_0_34px_rgba(255,143,171,.55)] md:text-9xl">
          Happy Birthday, Beautiful ♡
        </h2>
        <p className="mx-auto mt-8 max-w-2xl font-serif text-xl leading-9 text-white/78 md:text-2xl">
          you mean more than words can say. i hope this year brings you endless happiness, gentle mornings,
          loud laughter, and everything your heart dreams of.
        </p>
        <button
          onClick={(event) => onHeart(event.clientX, event.clientY)}
          className="mt-10 rounded-full border border-rose-blush/50 bg-rose-blush/10 px-8 py-4 font-serif text-lg text-white shadow-glow backdrop-blur-xl transition hover:-translate-y-1 hover:bg-rose-blush/20"
        >
          this is just the beginning
        </button>
      </motion.div>
    </div>
  );
}

function Confetti() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 70 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-3 w-1.5 rounded-sm bg-rose-blush"
          style={{ left: `${(index * 31) % 100}%`, top: `-${(index % 20) * 4}%`, rotate: `${index * 17}deg` }}
          animate={{ y: ["0vh", "120vh"], rotate: [0, 320] }}
          transition={{ duration: 6 + (index % 5), repeat: Infinity, delay: index * 0.11, ease: "linear" }}
        />
      ))}
    </div>
  );
}

function Balloons() {
  return (
    <div className="absolute inset-0">
      {[10, 22, 76, 88].map((left, index) => (
        <motion.div
          key={left}
          className="absolute bottom-[-16rem]"
          style={{ left: `${left}%` }}
          animate={{ y: ["0vh", "-122vh"], x: [0, index % 2 ? 22 : -22, 0] }}
          transition={{ duration: 13 + index * 2, repeat: Infinity, delay: index * 1.2, ease: "easeInOut" }}
        >
          <div className="h-32 w-24 rounded-full bg-gradient-to-br from-rose-blush to-lavender-dusk shadow-glow" />
          <div className="mx-auto h-20 w-px bg-white/30" />
        </motion.div>
      ))}
    </div>
  );
}

function Fireflies() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 26 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-paper-cream shadow-moon"
          style={{ left: `${(index * 41) % 100}%`, top: `${(index * 19) % 100}%` }}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -18, 0] }}
          transition={{ duration: 3 + (index % 4), repeat: Infinity, delay: index * 0.18 }}
        />
      ))}
    </div>
  );
}
