export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.32 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export const softReveal = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
};

export const stagger = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08
    }
  },
  viewport: { once: true, amount: 0.2 }
};

export const itemPop = {
  initial: { opacity: 0, y: 18, rotate: -1 },
  whileInView: { opacity: 1, y: 0, rotate: 0 },
  transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
};
