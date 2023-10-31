/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "starbots-yellow": "#FBAE42",
        "starbots-teal": "#3CB3C2",
        "starbots-peach": "#FED7AB",
        "starbots-blue": "#005C97",
        "starbots-pink": "#E46DAA",
      },
      backgroundImage: {
        "gradient-striped":
          "linear-gradient(to right, #000, #000 50%, #fff 50%, #fff)",
      },
    },
  },
  plugins: [],
};
