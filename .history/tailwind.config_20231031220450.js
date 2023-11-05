/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Lora: ["Lora", "sans-serif"],
        Noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  screens: {
    mobile: "320px",
    tablet: "481px",
    laptop: "769px",
    desktop: "1025px",
    // xs: "320px",
    // ss: "481px",
    // sm: "768px",
    // md: "1060px",
    // lg: "1200px",
    // xl: "1700px",
  },
  plugins: [],
}
