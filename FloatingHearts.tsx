"use client";

import { motion } from "framer-motion";

type Burst = {
  id: number;
  x: number;
  y: number;
};

export default function FloatingHearts({ bursts }: { bursts: Burst[] }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {bursts.map((burst) =>
        Array.from({ length: 7 }).map((_, index) => (
          <motion.span
            key={`${burst.id}-${index}`}
            className="absolute font-hand text-2xl text-rose-blush"
            style={{ left: burst.x, top: burst.y }}
            initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.4, 1, 0.8],
              x: (index - 3) * 18,
              y: -70 - Math.abs(index - 3) * 12
            }}
            transition={{ duration: 1.05, ease: "easeOut" }}
          >
            ♡
          </motion.span>
        ))
      )}
    </div>
  );
}
