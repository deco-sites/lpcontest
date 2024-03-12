import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1140px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        sans: "Albert Sans, sans-serif",
        serif: "serif",
      },
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
