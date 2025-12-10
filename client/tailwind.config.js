/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        cyber: {
          cyan: '#00F7FF',
          dark: '#0D1117',
          gray: '#161B22',
          border: '#30363D',
          fire: '#FF6D00',
          purple: '#BD00FF',
        }
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'snake-border': 'snake 3s linear infinite',
      }
    },
  },
  plugins: [],
}