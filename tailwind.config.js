/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/background.png')",
      },
      screens: {
        'xs': '320px',
        'xx': '350px',
        'xr': '400px',
      },
      animation: {
        fadeIn: 'fadeIn .5s ease-in',
        spin: 'spin 3s linear infinite', // You can customize the speed or other properties here
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

