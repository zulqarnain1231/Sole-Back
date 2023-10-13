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
          greish: "#E4E7EB",
        },
        white: {
          main: "#fff",
          off: "#FAFAFA",
          secondary: "#E6E6E6",
        },
        success: "#27AE60",
        danger: "#FC3400",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(143.58% 143.58% at 0% 0%, #FFD24C 0%, #F2B705 100%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
