module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '2-5xl': '1.625rem',
      },
      colors: {
        'red': '#e50914',
        'white': '#ffffff',
        'dark-gray': '#222',
      },
    }
  },
  plugins: [],
}
