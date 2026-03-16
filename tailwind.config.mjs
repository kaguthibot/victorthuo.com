/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        silver: {
          50: '#fafafa',
          100: '#f4f4f5',
          150: '#ececed',
          200: '#e0e0e2',
          300: '#c8c8cb',
          400: '#a0a0a5',
          500: '#7c7c82',
          600: '#5e5e64',
          700: '#46464b',
          800: '#303034',
          900: '#1c1c1f',
          950: '#111113',
        },
        clay: {
          DEFAULT: '#a0785a',
          light: '#c4a080',
          dark: '#7d5c42',
          50: '#faf6f1',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        '8xl': ['5.5rem', { lineHeight: '1.0', letterSpacing: '-0.035em' }],
        '9xl': ['7rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      maxWidth: {
        'content': '65ch',
        'wide': '80rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
