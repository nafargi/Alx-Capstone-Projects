module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // You can set it to 'media' or 'class' if needed #16151A 
  theme: {
    extend: {
      colors: {
        'spotify-green': '#272757',
        'spotify-black': '#0F0E46',
        'blue-3': '#505081',
        'spotify-white': '#C0C0C0',
        'spotify-gray': '#535353',
        'spotify-light-gray': '#B3B3B3',
        'spotify-dark-gray': '#282828',
        'spotify-darker-gray': '#121212',
        'border-gray': '#97e89712',
        'border-light-gray': '#97e89705',
        'dark-green': '#051b04',
        'gray-green': 'rgba(2, 80, 2, 0.587)',
        
      },
      
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};



// 'spotify-green': '#1DB954',
//         'spotify-black': '#000d09',
//         'spotify-white': '#C0C0C0',
//         'spotify-gray': '#535353',
//         'spotify-light-gray': '#B3B3B3',
//         'spotify-dark-gray': '#282828',
//         'spotify-darker-gray': '#121212',
//         'border-gray': '#97e89712',
//         'border-light-gray': '#97e89705',
//         'dark-green': '#051b04',
//         'gray-green': 'rgba(2, 80, 2, 0.587)',