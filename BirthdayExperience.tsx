"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import FloatingHearts from "@/components/FloatingHearts";
import FinalSection from "@/components/FinalSection";
import HeroSection from "@/components/HeroSection";
import LetterSection from "@/components/LetterSection";
import LoveSection from "@/components/LoveSection";
import MemoryTimeline from "@/components/MemoryTimeline";
import PlaylistSection from "@/components/PlaylistSection";

export default function BirthdayExperience() {
  const [loading, setLoading] = useState(true);
  const [ambient, setAmbient] = useState(false);
  const [heartBursts, setHeartBursts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1900);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const createBurst = (x: number, y: number) => {
    const id = Date.now() + Math.random();
    setHeartBursts((current) => [...current, { id, x, y }]);
    window.setTimeout(() => {
      setHeartBursts((current) => current.filter((burst) => burst.id !== id));
    }, 1200);
  };

  const sections = useMemo(
    () => [
      <HeroSection key="hero" ambient={ambient} setAmbient={setAmbient} onHeart={createBurst} />,
      <MemoryTimeline key="timeline" />,
      <LoveSection key="love" onHeart={createBurst} />,
      <PlaylistSection key="playlist" ambient={ambient} setAmbient={setAmbient} />,
      <LetterSection key="letter" />,
      <FinalSection key="final" onHeart={createBurst} />
    ],
    [ambient]
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-night-radial text-paper-cream">
      <CustomCursor />
      <FloatingHearts bursts={heartBursts} />
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-night-950"
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center">
              <motion.p
                className="font-hand text-4xl text-rose-blush md:text-6xl"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
              >
                making something soft...
              </motion.p>
              <motion.div
                className="mx-auto mt-6 h-1 w-44 overflow-hidden rounded-full bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-rose-glow"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-rose-glow/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-lavender-mist/10 blur-3xl" />
      </div>

      <nav className="fixed left-1/2 top-4 z-40 hidden -translate-x-1/2 rounded-full border border-white/10 bg-night-950/45 px-4 py-2 text-xs text-white/70 shadow-glow backdrop-blur-xl md:flex">
        {["for you", "memories", "things i love", "playlist", "letter", "today"].map((item, index) => (
          <a key={item} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-rose-blush" href={`#section-${index}`}>
            {item}
          </a>
        ))}
      </nav>

      <div className="relative z-10">
        {sections.map((section, index) => (
          <section id={`section-${index}`} key={index} className="scroll-mt-6">
            {section}
          </section>
        ))}
      </div>
    </main>
  );
}
