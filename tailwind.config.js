// tailwind.config.js
const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        banglaborno: ["AlinurBanglaborno", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
