/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'myblue':'#1F419B',
        'xylo':'#eceef6'
      },
      fontFamily:{
        display:['Poppins']
      },  
    },
    
  },
  plugins: [],
  
  
}

