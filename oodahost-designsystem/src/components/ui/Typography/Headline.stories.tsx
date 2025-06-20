// Headline.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Headline } from './Typography';

const meta: Meta<typeof Headline> = {
  title: 'components/Typography/Headline',
  component: Headline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Componente Headline del design system. Usa Roboto Extra Bold con tamaños específicos para diferentes jerarquías de títulos.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xl', 'l', 'm', 's', 'xs'],
      description: 'Tamaño del headline basado en las especificaciones del design system'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent'],
      description: 'Color del texto'
    },
    children: {
      control: 'text',
      description: 'Contenido del headline'
    }
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
    color: 'primary'
  }
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
  )
};

// Diferentes colores
export const Colors: Story = {
  render: () => (
    <div className="space-y-6">
      <Headline size="m" color="primary">
        Primary Color
      </Headline>
      <Headline size="m" color="secondary">
        Secondary Color
      </Headline>
      <Headline size="m" color="accent">
        Accent Color
      </Headline>
    </div>
  )
};

// Ejemplo de uso real
export const UsageExample: Story = {
  render: () => (
    <article className="max-w-4xl mx-auto space-y-6">
      <Headline size="xl" color="primary">
        Design System Documentation
      </Headline>
      
      <Headline size="m" color="secondary">
        Typography Guidelines
      </Headline>
      
      <Headline size="s" color="primary">
        Headline Component
      </Headline>
      
      <Headline size="xs" color="secondary">
        Implementation Details
      </Headline>
    </article>
  )
};

// Ejemplo responsivo
export const ResponsiveExample: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-500 mb-4">
        Resize the viewport to see responsive behavior
      </p>
      <Headline size="xl">
        Responsive Headline
      </Headline>
      <p className="text-xs text-gray-400">
        XL: 96px → 64px (tablet) → 48px (mobile)
      </p>
    </div>
  )
};

// Especificaciones técnicas
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
  )
};