/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      blue: {
        500: '#0152ff',
      },
      slate: {
        950: "#030712",
        900: '#111827',
        800: '#1f2937',
        100: '#f1f5f9'
      }
    },
    extend: {},
  },
  plugins: [],
}