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
                mobile: "320px",
                tablet: "481px",
                laptop: "769px",
                desktop: "1450px",
            },
            boxShadow: {
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                darkSm: '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
                darkInner: 'inset 0 2px 4px rgba(255, 255, 255, 0.1)',
            },
            backgroundImage: {
                'gradient-dark': 'radial-gradient(circle, transparent, #23262b7f, transparent)',
                spacing: {
        // Assuming the navbar height is 3.5rem (14 * 0.25rem),
        // we calculate the remaining height for the main content.
        'screen-minus-navbar': 'calc(100vh - 3.5rem)',
      },
      },
            
        },
        plugins: [],
    },
    variants: {
        extend: {
            borderColor: ["last"],
             
            scale: ['active'],
      backgroundColor: ['active'],
      boxShadow: ['active'],
        },
    },
}
