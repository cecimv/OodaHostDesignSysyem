const { designTokens } = require('./src/tokens.ts');
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
        neutralcolors:{
          //950: 'var(--neutral-950)',
          950: '#FF0000',
          900: 'var(--neutral-900)',
          850: 'var(--neutral-850)',
          800: 'var(--neutral-800)',
          700: 'var(--neutral-700)',
          600: 'var(--neutral-600)',
          500: 'var(--neutral-500)',
          400: 'var(--neutral-400)',
          300: 'var(--neutral-300)',
          200: 'var(--neutral-200)',
          150: 'var(--neutral-150)',
          100: 'var(--neutral-100)',
          50: 'var(--neutral-050)',
        },
        primarycolors: {
          950: 'var(--primary-950)',
          900: 'var(--primary-900)',
          850: 'var(--primary-850)',
          800: 'var(--primary-800)',
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
        dangercolors:{
          700: 'var(--danger-700)',
          600: 'var(--danger-600)',
          500: 'var(--danger-500)',
          400: 'var(--danger-400)',
          300: 'var(--danger-300)',
          200: 'var(--danger-200)',
          100: 'var(--danger-100)',
          50: 'var(--danger-050)',
        },
        warningcolors:{
          700: 'var(--warning-700)',
          600: 'var(--warning-600)',
          500: 'var(--warning-500)',
          400: 'var(--warning-400)',
          300: 'var(--warning-300)',
          200: 'var(--warning-200)',
          100: 'var(--warning-100)',
          50: 'var(--warning-050)',
        },
        successcolors:{
          700: 'var(--success-700)',
          600: 'var(--success-600)',
          500: 'var(--success-500)',
          400: 'var(--success-400)',
          300: 'var(--success-300)',
          200: 'var(--success-200)',
          100: 'var(--success-100)',
          50: 'var(--success-050)',
        },
        infocolors:{
          700: 'var(--info-700)',
          600: 'var(--info-600)',
          500: 'var(--info-500)',
          400: 'var(--info-400)',
          300: 'var(--info-300)',
          200: 'var(--info-200)',
          100: 'var(--info-100)',
          50: 'var(--info-050)',
        },

        ringColor: {
          primary: 'var(--primary-500)',
        },
        blackcolor: 'var(--black)',
        whitecolor: 'var(--white)',
        deepblackcolor: 'var(--deep-black)',
        darkgraycolor: 'var(--dark-gray)',
        mediumgraycolor: 'var(--medium-gray)',
        lightgraycolor: 'var(--light-gray)',
        whitebonecolor: 'var(--white-bone)',
        greencolor: 'var(--green)',
      },

      primary: designTokens.colors.primary,
      secondary: designTokens.colors.secondary,
      neutral: designTokens.colors.neutral,

      
  

  

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
