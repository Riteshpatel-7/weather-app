// tailwind.config.js
module.exports = {
  theme: {
    screens: {
        'xs': '480px',   // custom breakpoint
        'sm': '640px',   // small screens
        'md': '768px',   // medium screens
        'lg': '1024px',  // large screens
        'xl': '1280px',  // extra large screens
        '2xl': '1440px', // large screens
        '3xl': '1600px', // very large screens
      },
    extend: {
      fontFamily: {
        dmSans: ['"DM Sans"', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
