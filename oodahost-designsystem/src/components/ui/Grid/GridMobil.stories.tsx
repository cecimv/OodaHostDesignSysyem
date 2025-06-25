import type { Meta, StoryObj } from '@storybook/react';
import { GridMobile } from './Grid'; // Ajusta la ruta si es necesario

const meta: Meta<typeof GridMobile> = {
  title: 'Components/Grid/GridMobile',
  component: GridMobile,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The vertical tablet grid is designed for devices like iPads or tablets in portrait orientation, typically with widths between 600px and 768px. This layout uses 4 wider columns to ensure content remains readable and well-structured on narrower screens.',
      },
    },
  },
};

const items = Array.from({ length: 4 }, (_, i) => `Item ${i + 1}`);

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
      <GridMobile {...args}>
        {items.map((item) => (
          <div
            key={item}
            className="bg-gray-100 border border-gray-400 rounded items-center justify-center text-sm text-gray-700 grid grid-cols-1 md:grid-cols-6 "
            style={{ height: '100vh' }}
          >
            {item}
          </div>
        ))}
      </GridMobile>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof GridMobile>;