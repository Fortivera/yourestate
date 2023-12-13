/* eslint-disable prettier/prettier */
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
      screens: {
        'mobile': "320px",
        'tablet': "481px",
        'laptop': "769px",
       ' desktop': "1025px",
      },

    
    },
    plugins: [],
  },
  variants: {
    extend: {
      borderColor: ['last'],
    }
  }
}
