"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 450, damping: 34 });
  const y = useSpring(mouseY, { stiffness: 450, damping: 34 });

  useEffect(() => {
    let last = 0;
    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX - 10);
      mouseY.set(event.clientY - 10);

      const now = Date.now();
      if (now - last > 72) {
        last = now;
        const id = now + Math.random();
        setSparkles((current) => [...current.slice(-14), { id, x: event.clientX, y: event.clientY }]);
        window.setTimeout(() => {
          setSparkles((current) => current.filter((sparkle) => sparkle.id !== id));
        }, 850);
      }
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <motion.div
        className="absolute h-5 w-5 rounded-full border border-rose-blush/80 shadow-glow"
        style={{ x, y }}
      />
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-rose-blush"
          style={{ left: sparkle.x, top: sparkle.y }}
          initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 0, scale: 0, y: -18 }}
          transition={{ duration: 0.8 }}
        />
      ))}
    </div>
  );
}
