"use client";

import { motion } from "framer-motion";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { songs } from "@/data/site";
import { fadeUp } from "@/lib/animations";

type Props = {
  ambient: boolean;
  setAmbient: (value: boolean) => void;
};

export default function PlaylistSection({ ambient, setAmbient }: Props) {
  return (
    <div className="relative overflow-hidden px-5 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(255,143,171,.2),transparent_26%),radial-gradient(circle_at_20%_70%,rgba(200,182,255,.16),transparent_24%)]" />
      {["♪", "♫", "♬", "♩"].map((note, index) => (
        <motion.span
          key={index}
          className="absolute font-hand text-4xl text-rose-blush/55"
          style={{ left: `${12 + index * 24}%`, top: `${18 + (index % 2) * 54}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.25, 0.8, 0.25] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {note}
        </motion.span>
      ))}

      <motion.div className="relative mx-auto max-w-5xl text-center" {...fadeUp}>
        <p className="font-serif text-sm uppercase tracking-[0.35em] text-rose-blush/65">playlist</p>
        <h2 className="mt-3 font-hand text-5xl md:text-7xl">songs that remind me of you ♡</h2>
        <p className="mx-auto mt-4 max-w-lg font-serif text-lg text-white/64">a playlist for your beautiful soul.</p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-7 rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 text-left shadow-paper backdrop-blur-2xl md:grid-cols-[220px_1fr] md:p-8">
          <div className="grid place-items-center">
            <div className="relative h-44 w-44 rounded-full bg-gradient-to-br from-night-950 via-[#2a1d31] to-rose-dust p-8 shadow-glow">
              <motion.div className="h-full w-full rounded-full border-[18px] border-night-950/80 bg-rose-blush/80" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
              <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper-cream" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-hand text-4xl text-white">for you</p>
                <p className="font-serif text-sm text-white/55">soft, warm, slightly dramatic</p>
              </div>
              <button
                aria-label="play playlist"
                onClick={() => setAmbient(!ambient)}
                className="grid h-14 w-14 place-items-center rounded-full bg-rose-blush text-night-950 shadow-glow transition hover:scale-105"
              >
                {ambient ? <Pause size={22} /> : <Play size={22} className="ml-1" />}
              </button>
            </div>

            <div className="mt-6 flex h-10 items-end gap-1">
              {Array.from({ length: 28 }).map((_, index) => (
                <span
                  key={index}
                  className="w-1 rounded-full bg-rose-blush/70"
                  style={{
                    height: `${24 + ((index * 17) % 62)}%`,
                    animation: `equalize ${0.8 + (index % 6) * 0.12}s ease-in-out infinite`,
                    animationDelay: `${index * 0.03}s`
                  }}
                />
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {songs.map((song, index) => (
                <div key={song.title} className="grid grid-cols-[24px_1fr_auto] items-center gap-3 rounded-xl px-3 py-2 text-white/70 transition hover:bg-white/10 hover:text-white">
                  <span className="font-serif text-sm">{index + 1}</span>
                  <div>
                    <p className="font-serif text-base">{song.title}</p>
                    <p className="text-xs text-white/40">{song.artist}</p>
                  </div>
                  <span className="text-xs text-white/45">{song.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-5 text-rose-blush">
              <SkipBack size={20} />
              <Volume2 size={18} />
              <SkipForward size={20} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
