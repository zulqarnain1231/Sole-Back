/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#F2B705",
        },
        black: {
          main: "#000",
          secondary: "#2E2C34",
          off: "#84818A",
        },
        white: {
          main: "#fff",
          off: "#FAFAFA",
        },
        success: "#27AE60",
        danger: "#FC3400",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
