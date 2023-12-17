/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      colors: {
        yellow: "#D99904",
      },
    },
    fontFamily: {
      cinzel: ["Cinzel"],
      inter: ["Inter"],
    },
  },
  plugins: [require("daisyui")],
};
