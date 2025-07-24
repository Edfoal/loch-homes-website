import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceInUp: {
          "0%": { opacity: "0", transform: "translateY(50px) scale(0.95)" },
          "60%": { opacity: "1", transform: "translateY(-10px) scale(1.02)" },
          "80%": { transform: "translateY(5px) scale(0.99)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        bounceInUp: "bounceInUp 1s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
