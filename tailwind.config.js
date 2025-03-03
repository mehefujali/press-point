/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
 import daisyui from "daisyui";
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color':'#003366',
        'golden-color':'#D4B257'
      },
      fontFamily:{
        'poppins':'Poppins'
      }
    },
  },
  plugins: [daisyui],
});