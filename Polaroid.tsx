"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  caption?: string;
  kind: string;
  image?: string;
  rotate?: number;
  draggable?: boolean;
};

export default function Polaroid({ label, caption, kind, image, rotate = 0, draggable = false }: Props) {
  return (
    <motion.div
      drag={draggable}
      dragConstraints={{ left: -80, right: 80, top: -80, bottom: 80 }}
      whileHover={{ scale: 1.06, rotate: rotate * 0.35, zIndex: 20 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-56 shrink-0 rounded-sm bg-paper-cream p-3 pb-7 text-cocoa shadow-paper"
      style={{ rotate }}
    >
      <div className="absolute -top-3 left-1/2 h-7 w-20 -translate-x-1/2 rotate-2 bg-paper-kraft/45 backdrop-blur-sm" />
      <div className="h-48 overflow-hidden rounded-sm bg-night-800">
        {image ? (
          <img src={image} alt={label} className="h-full w-full object-cover" />
        ) : (
          <PlaceholderArt kind={kind} />
        )}
      </div>
      <p className="mt-3 font-hand text-2xl leading-6">{label}</p>
      {caption ? <p className="mt-1 font-serif text-sm leading-5 text-cocoa/70">{caption}</p> : null}
    </motion.div>
  );
}

export function PlaceholderArt({ kind }: { kind: string }) {
  if (kind === "chat") {
    return (
      <div className="flex h-full flex-col gap-2 bg-[#11131d] p-4">
        {["you looked like a dream today", "stoppp", "no, seriously", "you make every day softer"].map((line, index) => (
          <div
            key={line}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-[10px] ${
              index % 2 ? "ml-auto bg-rose-blush/80 text-night-950" : "bg-white/10 text-white/75"
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    );
  }

  if (kind === "plush") {
    return (
      <div className="grid h-full place-items-center bg-gradient-to-br from-[#806954] to-[#2f2724]">
        <div className="relative h-24 w-24 rounded-full bg-paper-kraft shadow-paper">
          <div className="absolute -left-5 top-2 h-10 w-10 rounded-full bg-paper-kraft" />
          <div className="absolute -right-5 top-2 h-10 w-10 rounded-full bg-paper-kraft" />
          <div className="absolute left-7 top-9 h-2 w-2 rounded-full bg-night-950" />
          <div className="absolute right-7 top-9 h-2 w-2 rounded-full bg-night-950" />
          <div className="absolute left-1/2 top-12 h-4 w-5 -translate-x-1/2 rounded-full bg-paper-beige" />
        </div>
      </div>
    );
  }

  if (kind === "window") {
    return (
      <div className="h-full bg-gradient-to-b from-[#242233] to-[#08080f] p-5">
        <div className="grid h-full grid-cols-3 gap-2 border border-white/20 p-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white/10 shadow-inner" />
          ))}
        </div>
      </div>
    );
  }

  if (kind === "lights") {
    return (
      <div className="relative h-full bg-gradient-to-b from-[#1b1528] to-[#07070c]">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-2 w-2 rounded-full bg-amber-200 shadow-[0_0_16px_rgba(255,214,165,.8)]"
            style={{ left: `${(index * 29) % 95}%`, top: `${(index * 47) % 90}%` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-b from-[#67558c] via-[#e79aa5] to-[#2a243b]">
      <div className="absolute bottom-0 h-20 w-full bg-night-950/45" />
      <div className="absolute bottom-14 left-8 h-16 w-28 rounded-full bg-night-950/35 blur-xl" />
      <div className="absolute right-8 top-8 h-12 w-12 rounded-full bg-paper-cream/80 shadow-moon" />
    </div>
  );
}
