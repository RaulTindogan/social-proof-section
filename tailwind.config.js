/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Primary Color
      'Very-Dark-Magenta': 'hsl(300, 43%, 22%)',
      'Soft-Pink': 'hsl(333, 80%, 67%)',

      // Neutral Color
      'Dark-Grayish-Magenta': 'hsl(303, 10%, 53%)',
      'Light-Grayish-Magenta': 'hsl(300, 24%, 96%)',
      'White': 'hsl(0, 0%, 100%)',
    },
    extend: {},
  },
  plugins: [],
}