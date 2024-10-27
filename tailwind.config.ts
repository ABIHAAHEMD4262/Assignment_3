/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Include all files in the app folder
    './src/components/**/*.{js,ts,jsx,tsx}', // Include all files in the components folder
    './src/pages/**/*.{js,ts,jsx,tsx}', // If you have a pages folder, include it
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
