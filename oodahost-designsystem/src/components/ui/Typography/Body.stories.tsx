import type { Meta, StoryObj } from '@storybook/react';
import { Body } from './Typography';

const meta: Meta<typeof Body> = {
  title: 'components/Typography/Body',
  component: Body,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Body is the primary typographic style used for extended text in interfaces. It defines key characteristics such as font size, line height, and weight, optimized to maximize readability and reading comfort. It serves as the base style for paragraphs and continuous content, distinguishing itself from headings and other text elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'Size variant of the body text',
    },
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'div'],
      description: 'HTML element to render',
    },
    children: {
      control: 'text',
      description: 'Content to be displayed',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    children: 'This is body text',
    size: 'm',
    as: 'p',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'This is the default body text',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default Body style defines the base typographic properties applied to the main text of paragraphs and extended content within components.',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">BODY-XL (24px)</h3>
        <Body size="xl">I'm a Body XL - Font Family: Roboto, Font Weight: Regular, Font Size: 24</Body>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">BODY-L (20px)</h3>
        <Body size="l">I'm a Body L - Font Family: Roboto, Font Weight: Regular, Font Size: 20</Body>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">BODY-M (16px)</h3>
        <Body size="m">I'm a Body M - Font Family: Roboto, Font Weight: Regular, Font Size: 16</Body>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">BODY-S (14px)</h3>
        <Body size="s">I'm a Body S - Font Family: Roboto, Font Weight: Regular, Font Size: 14</Body>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">BODY-XS (12px)</h3>
        <Body size="xs">I'm a Body Xs - Font Family: Roboto, Font Weight: Regular, Font Size: 12</Body>
      </div>     
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A complete set of typographic sizes for Body text, ranging from XS (12px) to XL (24px), enabling precise and consistent scalability across the interface.',
      },
    },
  },
}

export const Specifications: Story = {
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { size: 'xs', pixels: '24px', name: 'Body-XL' },
          { size: 's', pixels: '20px', name: 'Body-L' },
          { size: 'm', pixels: '16px', name: 'Body-M' },
          { size: 'l', pixels: '14px', name: 'Body-S' },
          { size: 'xl', pixels: '12px', name: 'Body-XS' }
        ].map((spec) => (
          <div 
            key={spec.size} 
            className="p-4 border border-gray-200 rounded-lg bg-gray-50"
          >
            <Body size={spec.size as any} className="mb-2">
              Aa
            </Body>
            <div className="text-xs text-gray-600 space-y-1">
              <div><strong>{spec.name}</strong></div>
              <div>Font Family: Roboto</div>
              <div>Font Weight: Regular</div>
              <div>Font Size: {spec.pixels}</div>
            </div>
          </div>
        ))}
      </div>
    ),
    parameters: {
      docs: {
        description: {
          story: 'The specifications detail the typographic characteristics of each Body text variant, including the font family used, the font weight (regular), and the specific font size for each variant (XL, L, M, S, XS). These sizes range from 24px in Body-XL to 12px in Body-XS, ensuring proper visual hierarchy and consistency in the presentation of textual content.',
        },
      },
    },
  };