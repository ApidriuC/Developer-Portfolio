/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        alertSlideIn: {
          '0%': { transform: 'translateY(-100%) translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0) translateX(-50%)', opacity: '1' },
        }
      },
      animation: {
        alertSlideIn: 'alertSlideIn 1s ease-out'
      },
    },
  },
}

