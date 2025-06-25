import type { Meta, StoryObj } from '@storybook/react';
import { GridTabletVertical } from './Grid';

const meta: Meta<typeof GridTabletVertical> = {
  title: 'Components/Grid/GridTabletVertical',
  component: GridTabletVertical,
  parameters: {
    layout: 'fullscreen',
    docs : {
      description: {
        component: 'The vertical tablet grid is designed for devices like iPads or tablets in portrait orientation, typically with widths between 600px and 768px. This layout uses 4 wider columns to ensure content remains readable and well-structured on narrower screens.',
      }
    }
  },

};

const items = Array.from({ length: 4 }, (_, i) => `Item ${i + 1}`);

export const Default: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'A desktop grid is a column-based design system used to organize and distribute visual content on desktop screens (generally with widths greater than 1024px). Its main purpose is to facilitate the creation of orderly, consistent, and responsive layouts, allowing elements to align properly and maintain a coherent visual structure.',
      },
    },
  },
  render: (args) => (
    <div className="w-screen h-screen bg-white">
      <GridTabletVertical {...args}>
        {items.map((item) => (
          <div
            key={item}
            className="bg-gray-100 border border-gray-400 rounded flex items-center justify-center text-sm text-gray-700"
            style={{ height: '100vh' }}
          >
            {item}
          </div>
        ))}
      </GridTabletVertical>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof GridTabletVertical>;