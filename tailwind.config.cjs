/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      colors: {
         'white': '#ffffff',
         'black': '#000000',
         'first-green': '#336600',
         'second-green': '#67998d',
         'third-brown': '#865433',
         'fouth-orange': '#f27326',
         'fifth-red': '#8c0b10',
         'sixth-gold': '#ffbe59',
         'seventh-darkblue': '#00008b',
         'eight-blue': '#5252FF',
      },
      extend: {
         keyframes: {
            show: {
               '0%': { opacity: 0 },
               '25%': { opacity: 0 },
               '50%': { opacity: 0.1},
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
