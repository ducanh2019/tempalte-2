/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    extend: {},
    backgroundImage: {
      'bg-gradiant': 'linear-gradient(90deg, #50C577 0%, #2DBEFC 100%);',
      'gra-input': 'linear-gradient(135deg, #3EED8B 0%, #0A9949 100%);',
      'banner': 'url(../img/banner-head.png)',
      'orange-color': 'linear-gradient(180deg, #FFB469 0%, #E57709 100%);',
      'swing-img': 'url(../img/vector.png)',
      'bg-service': 'url(../img/banner-dich-vu.png)',
      'bg-contact': 'url(../img/banner.jpg)'
    },
    colors: {
      'hr-shadow': 'rgba(37, 37, 37, 0.15);'
    },
  },
  plugins: [],
}
