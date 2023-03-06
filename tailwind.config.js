/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        robotoslab: ["Roboto Slab", "serif"],
      },
      fontSize: {
        heading: "10rem",
      },
      backgroundImage: {
        "split-white-black":
          "linear-gradient(to right, white 50% , black 50%);",
      },
    },
  },
  plugins: [],
};
