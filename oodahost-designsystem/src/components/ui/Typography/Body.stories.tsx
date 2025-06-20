import type { Meta, StoryObj } from '@storybook/react';
import { Body } from './Typography';

const meta: Meta<typeof Body> = {
  title: 'components/Typography/Body',
  component: Body,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Body typography component with different size variants using Roboto font family.',
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
        story: 'All available body text sizes from XS (12px) to XL (24px).',
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
    )
  };;

// Individual size stories
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'I\'m a Body Xs',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'I\'m a Body S',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'I\'m a Body M',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    children: 'I\'m a Body L',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'I\'m a Body XL',
  },
};

// Different HTML elements
export const AsSpan: Story = {
  args: {
    as: 'span',
    children: 'This is body text rendered as a span element',
  },
};

export const AsDiv: Story = {
  args: {
    as: 'div',
    children: 'This is body text rendered as a div element',
  },
};

// With custom styling
export const WithCustomStyling: Story = {
  args: {
    children: 'This is body text with custom styling',
    className: 'text-blue-600 underline',
  },
};

// Paragraph example
export const ParagraphExample: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <Body size="l">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Body>
      <Body size="m">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Body>
      <Body size="s">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Body>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of body text used in paragraph format with different sizes.',
      },
    },
  },
};