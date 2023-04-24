/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.tsx",
    "./src/Layout/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        green: {
          8: "#19FB9B",
        },
      },
      boxShadow: {
        shadow:
          "-2px -2px 8px rgba(182, 190, 196, 0.15), 4px 4px 8px rgba(182, 190, 196, 0.15)",
      },
      fontSize: {
        xs: "12px",
        sm: "15px",
        md: "17px",
        lg: "21px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "70px",
        "8xl": "94px",
        "9xl": "6rem",
      },
      backgroundImage: {
        hero: "url('/assets/hero.svg')",
      },
      animation: {
        gradient: 'gradient 10s ease infinite'
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundSize: '400% 400%',
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundSize: '400% 400%',
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundSize: '400% 400%',
            backgroundPosition: '0% 50%'
          },
        },
      },      
    },
  },
};
