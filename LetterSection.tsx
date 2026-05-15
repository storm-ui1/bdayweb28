"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Flower2, MailOpen } from "lucide-react";
import { useState } from "react";
import { letterLines } from "@/data/site";

export default function LetterSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden px-5 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,244,223,.18),transparent_28%),linear-gradient(180deg,rgba(33,29,27,.85),rgba(8,8,15,.95))]" />
      <Flower2 className="absolute left-[12%] top-28 hidden rotate-[-18deg] text-paper-beige/50 md:block" size={84} />
      <Flower2 className="absolute bottom-28 right-[14%] hidden rotate-12 text-rose-blush/45 md:block" size={96} />

      <div className="relative mx-auto grid min-h-[36rem] max-w-5xl place-items-center">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="closed"
              onClick={() => setOpen(true)}
              className="group rounded-sm bg-paper-beige px-14 py-12 text-cocoa shadow-paper transition hover:-translate-y-2 hover:shadow-glow"
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              exit={{ opacity: 0, scale: 0.94 }}
              viewport={{ once: true }}
            >
              <MailOpen className="mx-auto mb-5 text-rose-dust transition group-hover:scale-110" size={42} />
              <span className="font-hand text-4xl">open the letter</span>
              <span className="mt-3 block font-serif text-sm text-cocoa/60">for when your heart needs something warm</span>
            </motion.button>
          ) : (
            <motion.div
              key="open"
              className="note-lines relative w-full max-w-2xl rounded-sm bg-paper-cream px-8 py-12 text-cocoa shadow-paper md:px-14"
              initial={{ opacity: 0, scale: 0.92, y: 26 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -top-4 left-1/2 h-9 w-32 -translate-x-1/2 bg-rose-dust/45" />
              {letterLines.map((line, index) => (
                <motion.p
                  key={`${line}-${index}`}
                  className="min-h-7 font-hand text-2xl leading-8 md:text-3xl md:leading-9"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.09, duration: 0.3 }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
