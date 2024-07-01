/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Inter": ["Inter", "sans-serif"]
      },
      colors: {
        primaryBlue: "#1C2F56",
        secondaryBlue: '#14274E',
        gray: "#667799",
        lightGrey: '#A5B4D3',
        footerGrey: '#667799',
        mediumBlue: '#3C62B0',
        primaryLightBlue: '#A5B8DE',
        bgGray: "#F8FAFF"
      
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },

    },
  },
  plugins: [],
}