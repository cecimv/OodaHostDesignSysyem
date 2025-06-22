// Headline.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Headline } from './Typography';

const meta: Meta<typeof Headline> = {
  title: 'components/Typography/Headline',
  component: Headline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Headline is the typographic style used for titles and headings in interfaces. It defines characteristics such as larger font size, heavier weight, and tighter line spacing, aiming to capture attention and establish clear visual hierarchy. It is used to highlight important sections and differentiate titles from other text elements.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xl', 'l', 'm', 's', 'xs'],
      description: 'Size variant of the headline text.'
    },

    children: {
      control: 'text',
      description: 'Headline content.'
    },

    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story principal interactiva
export const Default: Story = {
  args: {
    size: 'xl',
    children: 'Headline Text',
  },
  parameters:{
    docs:{
      description:{
        story: 'The default Headline style defines the primary typographic properties applied to titles and headings within components.',
      },
    },
  },
};

// Mostrar todas las variantes de tamaño
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-gray-500 mb-2">Heading-XL (96px)</p>
        <Headline size="xl">Heading XL</Headline>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Heading-L (80px)</p>
        <Headline size="l">Heading L</Headline>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Heading-M (60px)</p>
        <Headline size="m">Heading M</Headline>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Heading-S (48px)</p>
        <Headline size="s">Heading S</Headline>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Heading-XS (32px)</p>
        <Headline size="xs">Heading XS</Headline>
      </div>
    </div>
  ),
  parameters:{
    docs:{
      description:{
        story: 'A complete set of typographic sizes for Headline text, ranging from XS (32px) to XL (96px), enabling precise and consistent scalability for headings across the interface.',
      },
    },
  },
};

export const Specifications: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { size: 'xl', pixels: '96px', name: 'Heading-XL' },
        { size: 'l', pixels: '80px', name: 'Heading-L' },
        { size: 'm', pixels: '60px', name: 'Heading-M' },
        { size: 's', pixels: '48px', name: 'Heading-S' },
        { size: 'xs', pixels: '32px', name: 'Heading-XS' }
      ].map((spec) => (
        <div 
          key={spec.size} 
          className="p-4 border border-gray-200 rounded-lg bg-gray-50"
        >
          <Headline size={spec.size as any} className="mb-2">
            Aa
          </Headline>
          <div className="text-xs text-gray-600 space-y-1">
            <div><strong>{spec.name}</strong></div>
            <div>Font Family: Roboto</div>
            <div>Font Weight: Extra Bold</div>
            <div>Font Size: {spec.pixels}</div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters:{
    docs:{
      description:{
        story: 'The specifications detail the typographic characteristics of each Headline text variant, including the font family used and the font weight (Extra Bold) across all sizes. These sizes range from 96px in Headline-XL to 32px in Headline-XS, ensuring proper visual hierarchy and consistency in the presentation of headings throughout the interface.',
      },
    },
  },
};