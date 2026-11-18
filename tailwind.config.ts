/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#241D4A",
        white: "#F1FBFA",
      },
      fontFamily: {
        ocr: ["ocr-a-std", "monospace"],
      },
      fontSize: {
        "text-6xl": "3.75rem",
        "text-7xl": "4.5rem",
        "text-8xl": "6rem",
        "text-9xl": "8rem",
      },
      boxShadow: {
        // Hard offset, no blur: boxes sit on the page like cut-out cards.
        dark: "3px 3px 0 0 #f472b6",
        light: "3px 3px 0 0 #5eead4",
      },
      borderRadius: {
        lg: "0.75rem",
      },
      screens: {
        
      }
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-hamburgers")],
};
