/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'regal-red': '#E13E57',
        'regal-green' : '#44B678'
      },
    },
  },
  plugins: [require("daisyui")],
};
