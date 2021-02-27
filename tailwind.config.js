module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-blue': '#2574a9',
        'theme-dark-blue': '#064974',
        'theme-darker-blue': '#2e76a5',
        'theme-darkest-blue': '#012841',
        'theme-light-blue': '#b7cfdf',
        'theme-lightest-blue': '#d2eafa',
      },
      spacing: {
        84: '21rem',
        88: '22rem',
        92: '23rem',
      },
    },
    fontFamily: {
      title: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['"PT Sans"', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
};
