/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js 13+ with /app folder
    "./pages/**/*.{js,ts,jsx,tsx}", // In case you have /pages folder
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
