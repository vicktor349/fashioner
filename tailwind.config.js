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
      backgroundColor: {
        "secondary": "rgba(229, 229, 229, 0.52)"
      },
      fontFamily: {
        body: ['Montserrat'],
        bodyFont: ['Poppins']
      },
      scale: {
        '-100': '-1'
      },
      boxShadow: {
        "latestProductBoxShadow": "0px 20px 50px 0px rgba(0, 0, 0, 0.10)",
        "subscribeShadow": "0px 20px 50px 0px rgba(255, 90, 95, 0.20)",
        "subscribeBannerShadow": "0px 20px 30px 0px rgba(8, 126, 139, 0.10)"
      }
    },
  },
  plugins: [],
}
