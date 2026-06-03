/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0c0c0b',
          2: '#131312',
          3: '#1a1a18',
        },
        surface: '#1f1f1d',
        accent: {
          DEFAULT: '#c8a96e',
          dim: '#8a7045',
        },
        ink: {
          DEFAULT: '#e8e6e1',
          muted: '#7a7870',
          dim: '#4a4845',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          hover: 'rgba(255,255,255,0.14)',
        },
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.22em',
      },
      lineHeight: {
        tight2: '0.9',
      },
    },
  },
  plugins: [],
}
