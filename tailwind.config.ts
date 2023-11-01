/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
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
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-hamburgers")],
};
