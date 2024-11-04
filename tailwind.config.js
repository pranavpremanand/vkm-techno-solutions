/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        'primary': '#A502A8',
        'secondary': '#2F4A9D',
        'tertiary': '#2773A7',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage:{
        'section4': "url('/src/assets/images/section4-img.png')",
      }
    },
  },
  plugins: [],
}