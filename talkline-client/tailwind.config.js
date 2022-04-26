module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          Roboto: ["Roboto", "sans-serif"],
          Pacifico: ["Pacifico", "cursive"],

         },
         borderRadius: {
          extraLarge: '52 rem'
        },
        maxHeight:{
            '32':'34rem'
        }
      },
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
  }