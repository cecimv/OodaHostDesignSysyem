// Highlight.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Highlight } from './Typography';

const meta: Meta<typeof Highlight> = {
  title: 'components/Typography/Highlight',
  component: Highlight,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Componente Highlight del design system. Usa Roboto Bold/Extra Bold para textos destacados y llamativos.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xl', 'l', 'm', 's', 'xs'],
      description: 'Tamaño del highlight basado en las especificaciones del design system'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent'],
      description: 'Color del texto'
    },
    children: {
      control: 'text',
      description: 'Contenido del highlight'
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
    children: 'I\'m a Highlight XL',
    color: 'primary'
  }
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
  )
};

// Diferentes colores
export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Highlight size="l" color="primary">
        Primary Highlight
      </Highlight>
      <Highlight size="l" color="secondary">
        Secondary Highlight
      </Highlight>
      <Highlight size="l" color="accent">
        Accent Highlight
      </Highlight>
    </div>
  )
};

// Ejemplo de uso en contexto
export const InContext: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <p className="text-base text-gray-700">
        Este es un párrafo normal con <Highlight size="m">texto destacado</Highlight> en 
        el medio para llamar la atención del usuario.
      </p>
      
      <p className="text-base text-gray-700">
        También puedes usar highlights más grandes como <Highlight size="l" color="accent">
        elementos principales
        </Highlight> dentro del contenido.
      </p>
      
      <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
        <Highlight size="xl" color="primary">
          Destacado importante
        </Highlight>
        <p className="text-sm text-gray-600 mt-1">
          Información adicional sobre este destacado
        </p>
      </div>
    </div>
  )
};

// Ejemplo para llamadas a la acción
export const CallToAction: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <Highlight size="xl" color="accent">
          ¡Oferta especial!
        </Highlight>
        <p className="text-gray-600 mt-2">
          <Highlight size="m">50% de descuento</Highlight> en todos los productos
        </p>
      </div>
      
      <div className="p-4 border border-gray-200 rounded-lg">
        <Highlight size="l" color="primary">
          Nuevo feature disponible
        </Highlight>
        <p className="text-gray-600 mt-1">
          Descubre las <Highlight size="s" color="accent">últimas funcionalidades</Highlight> 
          de nuestra plataforma
        </p>
      </div>
    </div>
  )
};

// Especificaciones técnicas
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
  )
};