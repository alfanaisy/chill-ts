/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/bg-login.jpg')",
        'register': "url('/src/assets/bg-register.jpg')",
        'hero': "url('/src/assets/hero-img.png')"
      },
      fontFamily: {
        'sans': ["lato"]
      },
      colors: {
        'primary': {
          100: '#09147A',
          200: '#0F1E93',
          300: '#192DB7',
          400: '#243FDB',
          500: '#3254FF'
        },
        'text-dark': {
          100: '#3A3541DE',
          200: '#3A3541AD',
          300: '#3A354161'
        },
        'text-light': {
          100: '#E7E3FC61',
          200: '#E7E3FCAD',
          300: '#E7E3FCDE'
        },
        'other-extra': '#3D4142',
        'other-header': '#181A1C',
        'other-body': '#2F3334',
        'other-paper': '#22282A',
        'other-chip': '#E7E3FC14',
        'other-input': '#E7E3FC0A',
        'other-border': '#E7E3FC38',
        'other-outline': '#E7E3FC3B',
        'info': {
          100: '#CDF1FF4D',
          200: '#0586FF',
          300: '#0367DB',
          400: '#024DB7'
        },
        'success': {
          100: '#F4FDDBCC',
          200: '#9FE04A',
          300: '#7EC036',
          400: '#60A125'
        },
        'warning': {
          100: '#FFFCCFCC',
          200: '#FFE70F',
          300: '#DBC40A',
          400: '#B7A207'
        },
        error: {
          100: '#FFEAD780',
          200: '#FF5B3A',
          300: '#DB3A2A',
          400: '#B71F1D'
        },

      }
    },
  },
  plugins: [],
}
