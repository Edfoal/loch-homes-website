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
        // animation: {
        //   bounceInUp: "bounceInUp 1s ease-out",
        // },
        screens: {
        sm: "640px",
        md: "768px",
        lg: "1280px", // shifted up from 1024px
        xl: "1536px",
        },
        container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1280px", // keep in sync
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
