/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-quicksand)",
      secondary: "var(--font-geist-mono)",
      alternative: "var(--font-spectral)",
    },
    extend: {
      colors: {
        primary: "#A57865", // Mocha Mousse
        secondary: "#939684", // Laurel Oak
        writingDark: "#161616", // Black
        writingLight: "#FFFFFF", // White
        accent: "#1E6F85", // Tapestry
        background: "#F0F0F0", // White Smoke
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;