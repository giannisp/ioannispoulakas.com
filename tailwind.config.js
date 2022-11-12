const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{js,md}'],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#2574a9',
        'typography-red': '#bf616a',
      },
      spacing: {
        84: '21rem',
        88: '22rem',
        92: '23rem',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
    fontFamily: {
      title: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['"PT Sans"', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [typography],
};
