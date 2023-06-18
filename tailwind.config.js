/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
"./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

