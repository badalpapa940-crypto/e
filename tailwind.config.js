/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#F4F3F0',
        'paper-dark': '#121210',
        surface: '#FFFFFF',
        'surface-dark': '#191916',
        ink: '#111110',
        'ink-dark': '#F4F3F0',
        'ink-soft': '#6E6C66',
        'ink-soft-dark': '#B3B0A8',
        'ink-faint': '#9B9890',
        'ink-faint-dark': '#77746C',
        hairline: '#E4E2DC',
        'hairline-dark': '#2C2B27',
        accent: '#9C6B2E',
        'accent-dark': '#D6A45C',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        widest2: '0.18em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 500ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
