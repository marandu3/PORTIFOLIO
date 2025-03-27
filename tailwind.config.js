/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,html}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'papobg': '#970747',
        'primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'secondary': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        'dark': {
          100: '#1E293B',
          200: '#0F172A',
          300: '#020617',
        },
        'light': {
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse-slow': 'spin-reverse 15s linear infinite',
        'gradient': 'gradient 3s ease infinite',
        'gradient-pulse': 'gradient-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-pulse': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            opacity: 0.8
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            opacity: 1
          },
        },
      },
    },
  },
  plugins: [], 
}

