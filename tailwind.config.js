/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {
        screens: {
          'md-1000': '1000px',
        },
        fontFamily: {
          'caladea': ['Caladea', 'serif'],
        },
        colors: {
          'pink-secondary': '#FFBBD3',
          'pink-primary': '#FF84C6',
        },
      },
  },
  plugins: [],
};
