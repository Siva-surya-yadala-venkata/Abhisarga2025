/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzelDecorative: ["Cinzel Decorative", "sans-serif"], // Google Font
      },
    },
  },
  plugins: [],
};
