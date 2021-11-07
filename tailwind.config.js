module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsl(245, 75%, 52%)',
        secondary: 'hsl(245, 85%, 69%)',
        pale: 'hsl(225, 100%, 94%)',

      },
      backgroundImage: {
        'hero-image': "url('../images/pattern-background-desktop.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
