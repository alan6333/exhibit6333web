
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero': "url('../public/images/backgroundrepeated.png')",
      }),
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '20%': '20%',
        '12': '2rem'
      }
    },
  },
  plugins: [],
}
