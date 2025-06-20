const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}", // ← Añade esto para que Storybook vea tus clases Tailwind
  ],
  theme: {
    animation: {
      shimmer: 'shimmer 2s infinite',
    },
    keyframes: {
      shimmer: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' },
      },
    },
    extend: {
      colors: {
        neutral:{
          950: '#1E1E1E',
          900: '#2D2D2D',
          850: '#3C3C3C',
          800: '#4B4B4B',
          700: '#696969',
          600: 'var(--neutral-600)',
          500: 'var(--neutral-500)',
          400: 'var(--neutral-400)',
          300: 'var(--neutral-300)',
          200: 'var(--neutral-200)',
          150: 'var(--neutral-150)',
          100: 'var(--neutral-100)',
          50: 'var(--neutral-050)',
        },
        primary: {
          950: 'var(--primary-950)',
          900: 'var(--primary-900)',
          850: 'var(--primary-850)',
          700: 'var(--primary-700)',
          600: 'var(--primary-600)',
          500: 'var(--primary-500)',
          400: 'var(--primary-400)',
          300: 'var(--primary-300)',
          200: 'var(--primary-200)',
          150: 'var(--primary-150)',
          100: 'var(--primary-100)',
          50: 'var(--primary-050)',
        },
        danger:{
          700: '#EC2D30',
          600: '#F64C4C',
          500: '#EB6F70',
          400: '#F49898',
          300: '#FFCCD2',
          200: '#FFEBEE',
          100: '#FEF2F2',
          50: '#FFFBFB',
        },
        warning:{
          700: '#FE9B0E',
          600: '#FFAD0D',
          500: '#FFC62B',
          400: '#FFDD82',
          300: '#FFEAB3',
          200: '#FFF7E1',
          100: '#FFF9EE',
          50: '#FFFDFA',
        },
        success:{
          700: '#0C9D61',
          600: '#47B881',
          500: '#6BC497',
          400: '#97D4B4',
          300: '#C0E5D1',
          200: '#E5F5EC',
          100: '#F2FAF6',
          50: '#FBFEFC',
        },
        info:{
          700: '#3A70E2',
          600: '#3B82F6',
          500: '#4BA1FF',
          400: '#93C8FF',
          300: '#BDDDFF',
          200: '#E4F2FF',
          100: '#F1F8FF',
          50: '#F8FCFF',
        },

        ringColor: {
          primary: 'var(--primary-500)',
        },
        customGray: '#b8b8b8',
        customText: '#111110',
      },

      
  

  

 /* --deep-black: #111110;
  --dark-gray: #191919;
  --medium-gray: #333333;
  --light-gray: #D6D6D6;
  --white-bone: #F5F4F2;
  --green: #26D086;*/
      fontFamily: {
        sans: ['Avenir', 'Roboto', 'ui-sans-serif', 'system-ui'],
        roboto: ['Roboto', 'sans-serif'], // ← Añade esta línea
      },
    },
  },
  
  plugins: [animate],
};

module.exports = config;
