import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#08080f",
          900: "#10101c",
          800: "#17152b",
          700: "#221d3d"
        },
        rose: {
          dust: "#e9a5ad",
          blush: "#f5c8c8",
          glow: "#ff8fab"
        },
        paper: {
          cream: "#fff4df",
          beige: "#ecd3b7",
          kraft: "#c79b72"
        },
        lavender: {
          mist: "#c8b6ff",
          dusk: "#74618f"
        },
        cocoa: "#5f4033"
      },
      boxShadow: {
        glow: "0 0 34px rgba(255, 143, 171, 0.35)",
        paper: "0 18px 45px rgba(29, 18, 16, 0.32)",
        moon: "0 0 55px rgba(255, 219, 174, 0.55)"
      },
      fontFamily: {
        hand: ["var(--font-hand)", "cursive"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,.28), transparent 24%), linear-gradient(135deg, rgba(255,255,255,.22), rgba(121,74,52,.09))",
        "night-radial":
          "radial-gradient(circle at 70% 15%, rgba(255,181,199,.24), transparent 24%), radial-gradient(circle at 18% 35%, rgba(200,182,255,.2), transparent 22%), linear-gradient(180deg, #090912 0%, #17152b 52%, #2b1b2d 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--rotate, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(calc(var(--rotate, 0deg) + 1deg))" }
        },
        twinkle: {
          "0%, 100%": { opacity: ".35", transform: "scale(.85)" },
          "50%": { opacity: "1", transform: "scale(1.25)" }
        },
        equalize: {
          "0%, 100%": { height: "22%" },
          "50%": { height: "92%" }
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        equalize: "equalize 1.2s ease-in-out infinite",
        spinSlow: "spinSlow 18s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
