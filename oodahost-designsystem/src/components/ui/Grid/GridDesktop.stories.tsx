import type { Meta, StoryObj } from '@storybook/react';
import { GridDesktop } from './Grid'; // Ajusta la ruta si es necesario

const meta: Meta<typeof GridDesktop> = {
  title: 'Components/Grid/GridDesktop',
  component: GridDesktop,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A desktop grid is a column-based layout system used to organize and distribute visual content on desktop screens (typically wider than 1024px). Its main purpose is to help create ordered, consistent, and responsive layouts, allowing elements to align properly and maintain a coherent visual structure.',
      },
    },
  },
};

const items = Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`);

export const Default: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '',
      },
    },
  },
  render: (args) => (
    <div className="w-screen h-screen bg-white">
      <GridDesktop {...args}>
        {items.map((item) => (
          <div
            key={item}
            className="bg-gray-100 border border-gray-400 rounded flex items-center justify-center text-sm text-gray-700"
            style={{ height: '100vh' }}
          >
            {item}
          </div>
        ))}
      </GridDesktop>
    </div>
  ),
};


export default meta;
type Story = StoryObj<typeof GridDesktop>;