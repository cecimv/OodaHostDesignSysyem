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
          950: colorVar('neutral-950'),
          900: colorVar('neutral-900'),
          850: colorVar('neutral-850'),
          800: colorVar('neutral-800'),
          700: colorVar('neutral-700'),
          600: colorVar('neutral-600'),
          500: colorVar('neutral-500'),
          400: colorVar('neutral-400'),
          300: colorVar('neutral-300'),
          200: colorVar('neutral-200'),
          150: colorVar('neutral-150'),
          100: colorVar('neutral-100'),
          50:  colorVar('neutral-050'),
        },
        primary: {
          950: colorVar('primary-950'),
          900: colorVar('primary-900'),
          850: colorVar('primary-850'),
          800: colorVar('primary-800'),
          700: colorVar('primary-700'),
          600: colorVar('primary-600'),
          500: colorVar('primary-500'),
          400: colorVar('primary-400'),
          300: colorVar('primary-300'),
          200: colorVar('primary-200'),
          150: colorVar('primary-150'),
          100: colorVar('primary-100'),
          50:  colorVar('primary-050'),
        },
        danger: {
          700: colorVar('danger-700'),
          600: colorVar('danger-600'),
          500: colorVar('danger-500'),
          400: colorVar('danger-400'),
          300: colorVar('danger-300'),
          200: colorVar('danger-200'),
          100: colorVar('danger-100'),
          50:  colorVar('danger-050'),
        },
        warning: {
          700: colorVar('warning-700'),
          600: colorVar('warning-600'),
          500: colorVar('warning-500'),
          400: colorVar('warning-400'),
          300: colorVar('warning-300'),
          200: colorVar('warning-200'),
          100: colorVar('warning-100'),
          50:  colorVar('warning-050'),
        },
        success: {
          700: colorVar('success-700'),
          600: colorVar('success-600'),
          500: colorVar('success-500'),
          400: colorVar('success-400'),
          300: colorVar('success-300'),
          200: colorVar('success-200'),
          100: colorVar('success-100'),
          50:  colorVar('success-050'),
        },
        info: {
          700: colorVar('info-700'),
          600: colorVar('info-600'),
          500: colorVar('info-500'),
          400: colorVar('info-400'),
          300: colorVar('info-300'),
          200: colorVar('info-200'),
          100: colorVar('info-100'),
          50:  colorVar('info-050'),
        },

        // Colores sueltos sin niveles
        black: colorVar('black'),
        white: colorVar('white'),
        'deep-black': colorVar('deep-black'),
        'dark-gray': colorVar('dark-gray'),
        'medium-gray': colorVar('medium-gray'),
        'light-gray': colorVar('light-gray'),
        'white-bone': colorVar('white-bone'),
        green: colorVar('green'),
        'green-dark': colorVar('green-dark'),
      },
      fontFamily: {
        sans: ['Avenir', 'Roboto', 'ui-sans-serif', 'system-ui'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [animate],
}
