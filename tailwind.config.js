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
      }
    },
  },
  plugins: [],
}

