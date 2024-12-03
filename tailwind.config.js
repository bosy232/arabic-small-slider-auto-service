/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#903060',
        'primary-dark': '#802050',
        'primary-light': '#A04070',
      },
    },
  },
  plugins: [],
};