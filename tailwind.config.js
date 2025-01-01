/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          '100' : '#37383c',
          '200' : '#3a3b3f',
          '300' : '#1a1a24'
        },
        secondary : {
          '100' : '#464646'
        },
        accent:{
          '100' : '#fd2331',
          '200' : '#ff433a',
          '300' : '#fd4855',
          '400' : '#fd2331',
          '500' : '#ff662d',
          '600' : '#ff7e4c',
          '700' : '#fec208'
        }
      },
    },
  },
  plugins: [],
}

