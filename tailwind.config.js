/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sara: ["var(--font-sara)"]
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primary: "#73C5A7",
        secondary: "#4B8D76",
        danger: "#E00D00",
        success: "#06C755",
        "light-green":"#E3F3ED",
        "dark-grey": "#333E59",
        "mid-grey": "#666E82",
        "light-grey": "#999FAC",
        "extar-light-grey": "#CCCFD5",
      }
    },
  },
  plugins: [],
};
