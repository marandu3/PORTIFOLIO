/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,html}"],
  theme: {
    extend: {
      colors:{
          'papobg':'#640D5F',
          'headtext':'#D91656',
          'cardbg':'#EB5B00',
          'yellow':'#FFB200',
      },
    },
  },
  plugins: [],
}

