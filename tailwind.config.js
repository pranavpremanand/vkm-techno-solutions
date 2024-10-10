/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5B6CFF',
      },
      backgroundImage:{
        'section4': "url('/src/assets/images/section4-img.png')",
        'section7': "url('/src/assets/images/section-7-bg.jpeg')",
      }
    },
  },
  plugins: [],
}