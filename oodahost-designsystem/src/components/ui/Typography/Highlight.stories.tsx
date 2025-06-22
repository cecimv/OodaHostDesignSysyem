// Highlight.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Highlight } from './Typography';

const meta: Meta<typeof Highlight> = {
  title: 'components/Typography/Highlight',
  component: Highlight,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Highlight is a typographic style designed to emphasize specific text within the interface, such as keywords or important phrases. It usually includes variations in weight, color, or style to draw attention without compromising overall readability. It is used to emphasize relevant content within paragraphs or lists.',
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xl', 'l', 'm', 's', 'xs'],
      description: 'Size variant of the highlight text.'
    },

    children: {
      control: 'text',
      description: 'Contenido del highlight.'
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
    children: 'I\'m a Highlight XL',  
  },
  parameters:{
    docs:{
      description:{
        story: 'The default Highlight style defines the typographic properties applied to emphasized text within components, such as keywords or important phrases.',
      },
    },
  },
};

// Mostrar todas las variantes de tamaño
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500 mb-2">Highlight-XL (24px, Extra Bold)</p>
        <Highlight size="xl">I'm a Highlight XL</Highlight>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Highlight-L (20px, Bold)</p>
        <Highlight size="l">I'm a highlight L</Highlight>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Highlight-M (16px, Bold)</p>
        <Highlight size="m">I'm a Highlight M</Highlight>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Highlight-S (14px, Bold)</p>
        <Highlight size="s">I'm a Highlight S</Highlight>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Highlight-XS (12px, Bold)</p>
        <Highlight size="xs">I'm a Highlight Xs</Highlight>
      </div>
    </div>
  ),
  parameters:{
    docs:{
      description:{
        story: 'A complete set of typographic sizes for Highlight text, ranging from XS (12px) to XL (24px), enabling precise and consistent emphasis across textual content in the interface.',
      },
    },
  },
};

export const Specifications: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { size: 'xl', pixels: '24px', weight: 'Extra Bold', name: 'Highlight-XL' },
        { size: 'l', pixels: '20px', weight: 'Bold', name: 'Highlight-L' },
        { size: 'm', pixels: '16px', weight: 'Bold', name: 'Highlight-M' },
        { size: 's', pixels: '14px', weight: 'Bold', name: 'Highlight-S' },
        { size: 'xs', pixels: '12px', weight: 'Bold', name: 'Highlight-XS' }
      ].map((spec) => (
        <div 
          key={spec.size} 
          className="p-4 border border-gray-200 rounded-lg bg-gray-50"
        >
          <Highlight size={spec.size as any} className="mb-2">
            Sample Text
          </Highlight>
          <div className="text-xs text-gray-600 space-y-1">
            <div><strong>{spec.name}</strong></div>
            <div>Font Family: Roboto</div>
            <div>Font Weight: {spec.weight}</div>
            <div>Font Size: {spec.pixels}</div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters:{
    docs:{
      description:{
        story: 'The specifications detail the typographic characteristics of each Highlight text variant, including the font family used, the font weight (Extra Bold), and the specific font size for each variant (XL, L, M, S, XS). These sizes range from 24px in Highlight-XL to 12px in Highlight-XS, ensuring precise emphasis and consistent presentation across textual content.',
      },
    },
  },
};