/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aluminium: "#88888D",
        limeGreen: "#57EFB4",
        blueBtn: "#006ADA",
        steelGrey: "#222233",
        vulcan: "#12121C",
        education: "#FFD166",
        spotify: "#1DB954",
      },
      fontFamily: {
        body: ["Nunito"],
        sora: ["Sora"],
      },
    },
  },
  plugins: [],
};
