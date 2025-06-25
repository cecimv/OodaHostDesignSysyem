import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    //"@storybook/addon-a11y",
    //"@storynook/addon-controls", ////
    //"@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen', // <-- cambia esto
  },
  
};
export default config;