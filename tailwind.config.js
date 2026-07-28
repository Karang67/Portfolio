/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#FFDF00',
          500: '#FFBF00',
          600: '#D49B00',
        },
        dark: {
          900: '#121214',
          800: '#1A1A1E',
          700: '#24242A',
          600: '#32323A',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(255, 191, 0, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 191, 0, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
