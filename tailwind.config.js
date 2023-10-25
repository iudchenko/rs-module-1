/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'sw-bg': "url('/assets/sw-bg.jpg')",
      },
    },
  },
  plugins: [],
};
