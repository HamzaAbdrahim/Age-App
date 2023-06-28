/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    
    extend: {},
    colors: {
'Purple': 'hsl(259, 100%, 65%)',
'Light-red': 'hsl(0, 100%, 67%)',
'White': 'hsl(0, 0%, 100%)',
'Off-white': 'hsl(0, 0%, 94%)',
'Light-grey': 'hsl(0, 0%, 86%)',
'Smokey-grey': 'hsl(0, 1%, 44%)',
'Off-black': 'hsl(0, 0%, 8%)',
    },
    letterSpacing: {
      leading_titel: '0.3em',
    }
  },
  plugins: [],
}

