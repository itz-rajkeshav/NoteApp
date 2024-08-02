/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'playwrite': ['"Playwrite AU NSW"', 'cursive'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
