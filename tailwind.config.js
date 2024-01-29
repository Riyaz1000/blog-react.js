/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        Viga: ["Viga", "sans-serif"],
        Poor: ["Poor ", "system-ui"],
      },
    },
  },
  plugins: [],
};
