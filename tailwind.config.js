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
      colors: {
        slate: {
          900: `#2B282F`,
          600: `#47424D`,
          500: `#5E676E`,
          150: `#E3E6E0`,
          300: `#CDD2D3`,
        },
        blue: {
          700: '#011082',
          500: '#0050ff',
          400: '#344afb',
        }
      }
    },
  },
  plugins: [],
}