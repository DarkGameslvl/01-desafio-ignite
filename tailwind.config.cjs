/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      purple: '#8284FA',
      'purple-dark': '#5E60CE',
      blue: '#4EA8DE',
      'blue-dark': '#1E6F9F',
      gray: {
        700: '#0D0D0D',
        600: '#1A1A1A',
        500: '#262626',
        400: '#333333',
        300: '#808080',
        200: '#D9D9D9',
        100: '#F2F2F2',
      },
      danger: '#E25858',
    },
  },
  plugins: [],
}
