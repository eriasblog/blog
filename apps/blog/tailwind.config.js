const defaultTheme = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'pages/**/!(*.stories|*.spec).{ts,tsx,html}'),
    join('libs/post/**/!(*.stories|*.spec).{ts,tsx,html}'),
    join('libs/util/**/!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        primaryColor: '#F9F9F9',
        countryCode: '#989DA3',
        titleColor: '#000000',
        searchBarBg: '#F9F9F9',
        searchBarBorder: '#BAC4D4',
        searchBarText: '#555A61',
      },
      maxWidth: {
        header: '1200px',
      },
      height: {
        header: '3rem',
      },
      width: {
        7.5: '1.8rem',
      },
      fontSize: {
        xxs: '.6rem',
      },
      dropShadow: {
        '3xl': '0 -3px 10px rgba(0, 0, 0, 0.65)',
      },
    },
  },
  plugins: [],
};
