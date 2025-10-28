/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './src/components/**/*.{astro,js,jsx,ts,tsx}',
    './src/layouts/**/*.{astro,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // 1. Define custom font families for consistency
      fontFamily: {
        // Poppins is a modern, clean sans-serif for H1/H2/H3
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
        // Inter is highly legible and great for paragraphs and body text
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      
      // 2. Define custom brand colors (based on your current palette)
      colors: {
        'hillcrop-green': '#00A651',
        'hillcrop-green-dark': '#008C44', // Darker shade for hover states
        'hillcrop-green-light': '#8FDFB8', // A lighter shade for light text on dark backgrounds
        'charcoal': '#1F2937', // Dark gray for secondary text and dark sections
        'hillcrop-cream': '#F7F7FE', 
        'hillcrop-yellow': '#FFD700',
      }
    },
  },
  plugins: [],
}
