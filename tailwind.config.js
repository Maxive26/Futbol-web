/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      greenCard: "#EBFD69",
      blackBG: "#1F2022",
      grayCard: "#D9DFE8",
      whiteCard: "#FFFFFF",
      grayPage: "#29292C",
      searchBG: "#242427",
      firstTeam: "#4D7C0F",
      red: "#b91c1c",
      yellow: "#fde047",
      green: "#65a30d",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
