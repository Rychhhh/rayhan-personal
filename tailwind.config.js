module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#080202',
        'selected_text' : '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404503',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
