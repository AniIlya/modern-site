/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img" : "url('./src/assets/Productimage.png')"
      }
    },
  },
  plugins: [],
}
