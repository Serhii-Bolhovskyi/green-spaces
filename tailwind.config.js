module.exports = {
  content: [
    "./src/pages/*.html",
    ".src.js/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        words: {
          '0%': { 'margin-top': '-270px' },
          '5%': { 'margin-top': '-180px' },
          '33%': { 'margin-top': '-180px' },
          '38%': { 'margin-top': '-90px' },
          '66%': { 'margin-top': '-90px' },
          '71%': { 'margin-top': '0px' },
          '99.99%': { 'margin-top': '0px' },
          '100%': { 'margin-top': '-270px' }
        }
      },
      animation: {
        'words': 'words 7s linear infinite'
      },
      colors: {
        white: '#FEFEFE',
        grayishWhite: '#D9D9D9',
        grayishLimeGreen: '#C4D8C0',
        darkGrayishLimeGreen: '#4C6A4B',
        grayishWhite: '#F2F2F2',
        raven: '#6C757D',
      },
      fontFamily: {
        sans: ['Philosopher', 'sans-serif']
      },
      // imageRendering: {
      //   pixelated: 'pixelated',
      // },
    },
  },
  plugins: [
    // function ({addUtilities}) {
    //   const newUtilities = {
    //     '.image-rendering-pixelated': {
    //       'image-rendering': 'pixelated',
    //   },
    //   };
    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // }
  ],
}

