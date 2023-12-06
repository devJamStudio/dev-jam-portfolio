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
        black: "#2e2e2e",
        white: "#FAF9F6",
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
        dark: "1px 1px 0px 1px #312919",
        light: "1px 1px 0px 1px #FAF9F6",
      },
      borderRadius: {
        lg: "0.375rem",
      },
      screens: {
        
      }
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-hamburgers")],
};
