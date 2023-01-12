
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
      },
    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '5.5': ['3.3575rem'],
      '6xl': ['3.663rem']
    },
    color: {
      'colorRed': '#00ff00;'
    },
    // inset: {
    //   '58-333': '42%'
    // }
  },
  plugins: [],
}
