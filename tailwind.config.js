/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3f8cff',
        secondary: '#00e5ff',
        background: '#0a192f',
        text: '#e6f1ff',
        accent: '#64ffda',
        header: '#112240',
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  important: true,
}
