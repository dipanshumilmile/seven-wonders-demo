/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fall: {
  "0%": { transform: "translateY(-200px)", opacity: "0" },
  "100%": { transform: "translateY(0)", opacity: "1" },
},

      },
    },
  },
  plugins: [],
}
