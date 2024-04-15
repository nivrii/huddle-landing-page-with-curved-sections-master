/** @type {import('tailwindcss').Config} */

/*! tailwindcss v2.2.7 | MIT License | https://tailwindcss.com */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',

      },
      colors: {
        'Pink': 'hsl(322, 100%, 66%)',
        'Light-pink': 'hsl(321, 100%, 78%)',
        'Light-red': 'hsl(0, 100%, 63%)',
        'Very-dark-cyan': 'hsl(192, 100%, 9%)',
        'Very-dark-blue': 'hsl(207, 100%, 98%)',
        'sectionBG': '#F6FBFF',
        'bgFooter': '#00252E',
        'attribution': 'hsl(228, 45%, 44%)',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Open-sans': ['Open Sans', 'serif'],
      },  
    },
  },
  plugins: [],
}

