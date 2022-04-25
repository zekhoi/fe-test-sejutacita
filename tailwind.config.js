module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        nunito: ["Nunito"],
        poppins: ["Poppins"],
      },
      colors: {
        gelap: {
          50: "#E1E0F5",
          100: "#C3C2EB",
          200: "#8785D6",
          300: "#4B47C2",
          400: "#312E8A",
          500: "#1C1A4E",
          600: "#16143D",
          700: "#100F2E",
          800: "#0B0A1F",
          900: "#05050F",
        },
        terang: {
          50: "#FFF9E6",
          100: "#FFF3CC",
          200: "#FFE799",
          300: "#FEDB67",
          400: "#FECF34",
          500: "#FDC301",
          600: "#CB9C01",
          700: "#987501",
          800: "#664E00",
          900: "#332700",
        },
      },
    },
  },
  plugins: [],
};
