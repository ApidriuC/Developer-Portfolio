/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [],
  theme: {
    extend: {
      screens: {
        'xs': '299px',
      },
      colors: {
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        'bg-3': 'var(--bg-3)',
        chrome: 'var(--chrome)',
        line: 'var(--border)',
        ink: 'var(--text)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        alertSlideIn: {
          '0%': { transform: 'translateY(-100%) translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0) translateX(-50%)', opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        alertSlideIn: 'alertSlideIn 1s ease-out',
        fadeUp: 'fadeUp 0.6s ease-out both',
      }
    }
  }
}
