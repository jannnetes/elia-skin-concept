export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        skin: {
          light: "#f3ede7",
          soft: "#e8dfd6",
          warm: "#d9cbbd"
        }
      }
    },
  },
  plugins: [],
}
