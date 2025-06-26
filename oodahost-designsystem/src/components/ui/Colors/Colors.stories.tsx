import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ColorPalette, Color } from './Colors';

const blackwhiteColors: Color[] = [
    { name: 'Black', value: 'var(--black)'},
    { name: 'White', value: 'var(--white)'},
];

const neutralColors: Color[] = [
    { name: 'Neutral 9.5', value: 'var(--neutral-950)'},
    { name: 'Neutral 9', value: 'var(--neutral-900'},
    { name: 'Neutral 8.5', value: 'var(--neutral-850)'},
    { name: 'Neutral 8', value: 'var(--neutral-800)'},
    { name: 'Neutral 7', value: 'var(--neutral-700)'},
    { name: 'Neutral 6', value: 'var(--neutral-600)'},
    { name: 'Neutral 5', value: 'var(--neutral-500)'},
    { name: 'Neutral 4', value: 'var(--neutral-400)'},
    { name: 'Neutral 3', value: 'var(--neutral-300)'},
    { name: 'Neutral 2', value: 'var(--neutral-200)'},
    { name: 'Neutral 1.5', value: 'var(--neutral-150)'},
    { name: 'Neutral 1', value: 'var(--neutral-100)'},
];

const primaryColors: Color[] = [
  { name: 'Primary 9.5', value: 'var(--primary-950)' },
  { name: 'Primary 9', value: 'var(--primary-900)' },
  { name: 'Primary 8.5', value: 'var(--primary-850)' },
  { name: 'Primary 8', value: 'var(--primary-800)' },
  { name: 'Primary 7', value: 'var(--primary-700)' },
  { name: 'Primary 6', value: 'var(--primary-600)' },
  { name: 'Primary 5', value: 'var(--primary-500)' },
  { name: 'Primary 4', value: 'var(--primary-400)' },
  { name: 'Primary 3', value: 'var(--primary-300)' },
  { name: 'Primary 2', value: 'var(--primary-200)' },
  { name: 'Primary 1.5', value: 'var(--primary-150)' },
  { name: 'Primary 1', value: 'var(--primary-100)' },
  { name: 'Primary 0.5', value: 'var(--primary-050)' },
];

const brandColors: Color[] = [
    { name: 'Deep Black', value: 'var(--deep-black)'},
    { name: 'Dark Gray', value: 'var(--dark-gray)'},
    { name: 'Medium gray', value: 'var(--medium-gray)'},
    { name: 'Light gray', value: 'var(--light-gray)'},
    { name: 'White bone', value: 'var(--white-bone)'},
    { name: 'Green', value: 'var(--green)'},
];

const dangerColors: Color[] = [
    { name: 'Danger 700', value: 'var(--danger-700)'},
    { name: 'Danger 600', value: 'var(--danger-600)'},
    { name: 'Danger 500', value: 'var(--danger-500)'},
    { name: 'Danger 400', value: 'var(--danger-400)'},
    { name: 'Danger 300', value: 'var(--danger-300)'},
    { name: 'Danger 200', value: 'var(--danger-200)'},
    { name: 'Danger 100', value: 'var(--danger-100)'},
    { name: 'Danger 50', value: 'var(--danger-050)'},
];

const warningColors: Color[] = [
    { name: 'Waning 700', value: 'var(--warning-700)'},
    { name: 'Waning 600', value: 'var(--warning-600)'},
    { name: 'Waning 500', value: 'var(--warning-500)'},
    { name: 'Waning 400', value: 'var(--warning-400)'},
    { name: 'Waning 300', value: 'var(--warning-300)'},
    { name: 'Waning 200', value: 'var(--warning-200)'},
    { name: 'Waning 100', value: 'var(--warning-100)'},
    { name: 'Waning 50', value: 'var(--warning-050)'},
];

const successColors: Color[] = [
    { name: 'Success 700', value: 'var(--success-700)'},
    { name: 'Success 600', value: 'var(--success-600)'},
    { name: 'Success 500', value: 'var(--success-500)'},
    { name: 'Success 400', value: 'var(--success-400)'},
    { name: 'Success 300', value: 'var(--success-300)'},
    { name: 'Success 200', value: 'var(--success-200)'},
    { name: 'Success 100', value: 'var(--success-100)'},
    { name: 'Success 50', value: 'var(--success-050)'},
];

const infoColors: Color[] = [
    { name: 'Info 700', value: 'var(--info-700)'},
    { name: 'Info 600', value: 'var(--info-600)'},
    { name: 'Info 500', value: 'var(--info-500)'},
    { name: 'Info 400', value: 'var(--info-400)'},
    { name: 'Info 300', value: 'var(--info-300)'},
    { name: 'Info 200', value: 'var(--info-200)'},
    { name: 'Info 100', value: 'var(--info-100)'},
    { name: 'Info 50', value: 'var(--info-050)'},
];

const meta: Meta<typeof ColorPalette> = {
  title: 'Components/Color/ColorPalette',
  component: ColorPalette,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A color palette is a defined set of colors used to maintain visual consistency across the interface. It groups tones by function (primary, brand, neutral, feedback) and enables a consistent, accessible, and scalable design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Sets the size of the color item (small, medium, large).',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Sets the shape of the color container (circle, square, rounded).',
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Shows the name label of each color.',
    },
    selectedColor: {
      control: { type: 'text' },
      description: 'Specifies which color is currently selected.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BlackWhite: Story = {
    args: {
        label: 'Black & Whtie',
        colors: blackwhiteColors,
        shape: 'rounded',
        showLabels: true,
    },
    parameters: {
        docs: {
            description: {
                story: "The Black & White palette includes only the most extreme values in the system: black (#000000) and white (#FFFFFF). They are used to create high contrast, especially in text, base backgrounds, and elements that require maximum readability.",
            },
        },
    },
};

export const Neutral: Story = {
    args: {
        label: 'Neutral',
        colors: neutralColors,
        shape: 'rounded',
        showLabels: true,
    },
    parameters: {
        docs: {
            description: {
                story: "The Neutral Colors palette spans a range of grays from a softened black (#1E1E1E) to a warm white (#FAFAFA). These tones are used for backgrounds, borders, dividers, and secondary text, offering visual flexibility without competing with primary or brand colors. They are essential for establishing hierarchy, depth, and balance across the interface.",
            },
        },
    },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    colors: primaryColors,
    shape: 'rounded',
    showLabels: true,
  },
  parameters: {
    docs: {
        description: {
            story: "The Primary Colors palette consists of green shades ranging from a very dark green (#04150D) to a very light green (#E9FAF3). This palette represents the core identity of the product or brand and is used in buttons, links, interactive elements, and active states. The different intensities help build visual hierarchy, support UI states (hover, focus, disabled), and maintain aesthetic consistency across the interface.",
        },
    },
},
};

export const Brand: Story = {
    args: {
        label: 'Brand',
        colors: brandColors,
        shape: 'rounded',
        showLabels: true,
      },
      parameters: {
        docs: {
            description: {
                story: "The Brand Colors palette consists of dark and light neutral tones (#111110, #191919, #333333, #D6D6D6, #F5F4F2) along with a distinctive brand accent color (#26D086). This combination reinforces the product's visual identity and is applied to key elements such as backgrounds, headings, highlighted text, icons, and branded buttons. The neutral tones ensure versatility and readability, while the green accent adds recognition and personality to the interface.",
            },
        },
    },
};

export const Danger: Story = {
    args: {
        label: 'Danger',
        colors: dangerColors,
        shape: 'rounded',
        showLabels: true,
      },
      parameters: {
        docs: {
            description: {
                story: "The Danger palette ranges from a strong red (#EC2D30) to an almost white tone (#FFFBFB). It is used to represent errors, critical warnings, or destructive actions. The various intensities support different states such as hover, focus, and soft backgrounds for alerts or error messages.",
            },
        },
    },
};

export const Warning: Story = {
    args: {
        label: 'Warning',
        colors: warningColors,
        shape: 'rounded',
        showLabels: true,
      },
      parameters: {
        docs: {
            description: {
                story: "The Warning palette ranges from a vibrant orange (#FE9B0E) to a very light tone (#FFFDFA). It is used to indicate cautions, non-critical alerts, or attention states. The varying tones help create visual scaling from icons to informative backgrounds.",
            },
        },
    },
};

export const Success: Story = {
    args: {
        label: 'Success',
        colors: successColors,
        shape: 'rounded',
        showLabels: true,
      },
      parameters: {
        docs: {
            description: {
                story: "The Success palette includes green tones ranging from a deep green (#0C9D61) to a very light background (#FBFEFC). It represents successful states, confirmations, or positive outcomes. Variants can be used in badges, text, icons, or success message containers.",
            },
        },
    },
};

export const Info: Story = {
    args: {
        label: 'Info',
        colors: infoColors,
        shape: 'rounded',
        showLabels: true,
      },
      parameters: {
        docs: {
            description: {
                story: "The Info palette ranges from a deep blue (#3A70E2) to a very light blue (#F8FCFF). It is used to communicate general information, neutral messages, or contextual cues that are not errors or warnings. Ideal for informational banners or secondary labels.",
            },
        },
    },
};