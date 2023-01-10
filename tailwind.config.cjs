/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         'white': '#FFFFFF',
         'black': '#000000',
         'brown': {
            100: '#A57939',
            200: '#A06640',
            300: '#865433',
            400: '#6A462F',
            500: '#4C372A',
         },
         'gold': {
            100: '#FFDFAD',
            200: '#FFCD80',
            300: '#ffbe59',
            400: '#FFA314',
            500: '#C77900',
         },
         'darkblue': {
            100: '#5C5CFF',
            200: '#0F0FFF',
            300: '#0000C2',
            400: '#00008b',
            500: '#000061',
            600: '#a7b7d5',
            700: '#D6E6FF',
         },
      },
      extend: {
         keyframes: {
            show: {
               '0%': { opacity: 0 },
               '25%': { opacity: 0 },
               '50%': { opacity: 0.1 },
               '100%': { opacity: 1 }
            }
         },
         animation: {
            show: 'show 2s',
            'show-2': 'show 4s',
            'show-3': 'show 6s',
            'show-4': 'show 8s'
         }
      },
      plugins: [],
   },
};
