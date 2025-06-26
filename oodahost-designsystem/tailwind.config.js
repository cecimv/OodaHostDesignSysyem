const animate = require('tailwindcss-animate')

const colorVar = (token) => ({ opacityValue }) =>
  opacityValue
    ? `rgb(var(--${token}) / ${opacityValue})`
    : `rgb(var(--${token}))`
    
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      colors: {
        // Aquí mapeas los tokens sin guiones en las keys (no uses camelCase, usa nombres sencillos)
        neutral: {
          950: 'var(--neutral-950',
          900: 'var(--neutral-900',
          850: 'var(--neutral-850',
          800: 'var(--neutral-800',
          700: 'var(--neutral-700',
          600: 'var(--neutral-600',
          500: 'var(--neutral-500',
          400: 'var(--neutral-400',
          300: 'var(--neutral-300',
          200: 'var(--neutral-200',
          150: 'var(--neutral-150',
          100: 'var(--neutral-100',
          50:  'var(--neutral-050',
        },
        primary: {
          950: 'var(--primary-950',
          900: 'var(--primary-900',
          850: 'var(--primary-850',
          800: 'var(--primary-800',
          700: 'var(--primary-700',
          600: 'var(--primary-600',
          500: 'var(--primary-500',
          400: 'var(--primary-400',
          300: 'var(--primary-300',
          200: 'var(--primary-200',
          150: 'var(--primary-150',
          100: 'var(--primary-100',
          50:  'var(--primary-050',
        },
        danger: {
          700: 'var(--danger-700',
          600: 'var(--danger-600',
          500: 'var(--danger-500',
          400: 'var(--danger-400',
          300: 'var(--danger-300',
          200: 'var(--danger-200',
          100: 'var(--danger-100',
          50:  'var(--danger-050',
        },
        warning: {
          700: 'var(--warning-700',
          600: 'var(--warning-600',
          500: 'var(--warning-500',
          400: 'var(--warning-400',
          300: 'var(--warning-300',
          200: 'var(--warning-200',
          100: 'var(--warning-100',
          50:  'var(--warning-050',
        },
        success: {
          700: 'var(--success-700',
          600: 'var(--success-600',
          500: 'var(--success-500',
          400: 'var(--success-400',
          300: 'var(--success-300',
          200: 'var(--success-200',
          100: 'var(--success-100',
          50:  'var(--success-050',
        },
        info: {
          700: 'var(--info-700',
          600: 'var(--info-600',
          500: 'var(--info-500',
          400: 'var(--info-400',
          300: 'var(--info-300',
          200: 'var(--info-200',
          100: 'var(--info-100',
          50:  'var(--info-050',
        },

        // Colores sueltos sin niveles
        black: 'var(--black',
        white: 'var(--white',
        'deep-black': 'var(--deep-black',
        'dark-gray': 'var(--dark-gray',
        'medium-gray': 'var(--medium-gray',
        'light-gray': 'var(--light-gray',
        'white-bone': 'var(--white-bone',
        green: 'var(--green',
        'green-dark': 'var(--green-dark',
      },
      fontFamily: {
        sans: ['Avenir', 'Roboto', 'ui-sans-serif', 'system-ui'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [animate],
}