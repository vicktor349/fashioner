/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF5A5F",
        "heroBackground": "rgba(0, 0, 0, 0.66)"
      },
      fontFamily: {
        body: ['Montserrat']
      },
      scale: {
        '-100': '-1'
      },
      boxShadow: {
        "latestProductBoxShadow": "0px 20px 50px 0px rgba(0, 0, 0, 0.10)"
      }
    },
  },
  plugins: [],
}
