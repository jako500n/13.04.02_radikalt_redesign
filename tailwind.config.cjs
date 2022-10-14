/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#14272B",
        gris: "#F8CABC",
        beige: "#FFB486",
        rod: "#FF6445",
        groen: "#2F6457",
        hvid: "#EFEFEF",
      },
    },
    fontFamily: {
      fredericka: "Fredericka the Great, cursive",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
