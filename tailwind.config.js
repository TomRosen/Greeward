module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e4fff6",
          100: "#daffec",
          200: "#d0ffe2",
          300: "#c6ffd8",
          400: "#bcfbce",
          500: "#b2f1c4",
          600: "#a8e7ba",
          700: "#9eddb0",
          800: "#94d3a6",
          900: "#1cd567",
          'DEFAULT': "#1cd567",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
