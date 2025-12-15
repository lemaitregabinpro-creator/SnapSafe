/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./mac.html",
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        snap: {
          yellow: '#FFFC00',
          black: '#000000',
          dark: '#121212',
          card: '#1E1E1E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

