/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,js,jsx,ts}"],  // Ensure the paths match your project structure
  theme: {
    extend: {
      colors: {
        'highlight': '#BEE5EA',  // Updated color value
      },
    },
  },
  plugins: [],
}