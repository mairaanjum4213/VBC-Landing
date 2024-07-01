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
        primaryBlue:"#1C2F56",
        gray: "#667799", 
        bgGray:"#F8FAFF"
       
      },

    },
  },
  plugins: [],
}