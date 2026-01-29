import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13c8ec',
        'background-light': '#f6f8f8',
        'background-dark': '#101f22',
        'border-light': '#e7f1f3',
        'border-dark': '#1a2e32',
        'surface-dark': '#0b1618',
        'surface-hover': '#203539',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      backgroundImage: {
        'blueprint-light':
          'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
        'blueprint-dark':
          'linear-gradient(#1a2e32 1px, transparent 1px), linear-gradient(90deg, #1a2e32 1px, transparent 1px)',
      },
      backgroundSize: {
        blueprint: '40px 40px',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      boxShadow: {
        glow: '0 0 20px 0 rgba(19, 200, 236, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
