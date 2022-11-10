/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ffffff',
        'secondary-color': '#666666',
        'third-color': '#061121',
        'fourth-color': '#000000',
        'fifth-color': '#C76E80',
        'sixth-color': '#22c15e',
        'seventh-color': '#1b1b1b',
        'transparency': 'rgba(0,0,0,0.5)',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Autography: ['Autography', 'sans-serif']
      },
      backgroundImage: {
        'border-svg': "url('/images/ui-divider.svg')",
        'gradient-blue-mobile': "linear-gradient(180deg, rgba(6,17,33,0) 0%, rgba(6,17,33,0) 40%, rgba(6,14,33) 54%)",
        'gradient-blue-tablet': "radial-gradient(80% 500% at 85% 45%, rgba(0, 0, 0, 0.8) 35.94%, rgba(0, 0, 0, 0) 71.88%)",

        'gradient-black-mobile': "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0) 49%)",
        'gradient-black-tablet': "radial-gradient(80% 500% at 0% 45%, rgba(0, 0, 0, 0.9) 35.94%, rgba(0, 0, 0, 0) 71.88%)",
        'gradient-black-bg': "linear-gradient(180deg, #010101 0%, #3D3538 93.23%)",
        'pattern': "url(/images/pattern.png)",
      },
      backgroundPosition: {
        'position-mobile': '50% 74%',
        'position-desktop': '50% 100%'
      },
      backgroundSize: {
        'size-mobile': '100%',
        'size-desktop': '30%'
      },
    },
  },
  plugins: [require("daisyui")],
}