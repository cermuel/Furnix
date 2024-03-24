/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#737cde",
      },
      backgroundImage: {
        hero: "url('/public/hero.webp')",
      },
    },
  },
  plugins: [],
};
