/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#bcdccf',
          300: '#91c3b1',
          400: '#64a590',
          500: '#438772',
          600: '#326c5b',
          700: '#2a5649',
          800: '#23463c',
          900: '#1b3a32',
          950: '#0e201b',
        },
        sage: {
          50: '#f5f7f5',
          100: '#e7ece6',
          200: '#d1dbd0',
          300: '#b1c2af',
          400: '#8ca38a',
          500: '#6e866c',
          600: '#556c53',
          700: '#445642',
          800: '#384637',
          900: '#2f3b2e',
        },
        cream: {
          50: '#fdfcf9',
          100: '#f9f7f0',
          200: '#f3efe2',
        },
        darkbg: {
          900: '#0b1110',
          850: '#0f1715',
          800: '#131e1b',
          750: '#172522',
          700: '#1c2d29',
          border: '#233833'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
