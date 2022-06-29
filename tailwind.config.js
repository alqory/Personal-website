/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        dark : "#181818",
        yellow : "#FFFF00"
      }
    },
    
  },
  plugins: [],
}
