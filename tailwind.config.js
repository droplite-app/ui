/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: {
        50: '#F7FCFE',
        100: '#D9F1FF',
        200: '#BCE7FF',
        300: '#8EDAFF',
        400: '#59C2FF',
        500: '#33A5FE',
        600: '#1C87F4',
        700: '#156FE0',
        800: '#185AB5',
        900: '#194E8F',
        950: '#1A3D6F',
      },
      red: {
        50: '#FCF3F8',
        100: '#FAE9F2',
        200: '#F7D3E5',
        300: '#F1B0CF',
        400: '#E77FAF',
        500: '#E06C9F',
        600: '#C93971',
        700: '#AE2859',
        800: '#90244A',
        900: '#782340',
        950: '#490E22',
      },
      purple: {
        50: '#EEF0FF',
        100: '#E1E4FE',
        200: '#C8CDFD',
        300: '#A7ACFA',
        400: '#7C7AF5',
        500: '#7266EE',
        600: '#6349E2',
        700: '#543BC7',
        800: '#4532A1',
        900: '#3B307F',
        950: '#241C4A',
      },
    },
    extend: {
     
    },
  },
  plugins: [],
}

