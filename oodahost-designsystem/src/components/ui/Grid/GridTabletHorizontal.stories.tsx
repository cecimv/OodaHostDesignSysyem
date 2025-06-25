import type { Meta, StoryObj } from '@storybook/react';
import { GridTabletHorizontal } from './Grid';

const meta: Meta<typeof GridTabletHorizontal> = {
  title: 'Components/Grid/GridTabletHorizontal',
  component: GridTabletHorizontal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Grilla para tablet horizontal: 8 columnas de 129px, gutter de 16px y márgenes laterales de 24px.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GridTabletHorizontal>;

const items = Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`);

export const Default: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'A horizontal tablet grid is used to structure content on tablets held in landscape orientation, typically with screen widths between 768px and 1024px. It serves as a responsive layout system to maintain the visual organization of a design when the screen is narrower than desktop but still wide enough to accommodate multiple columns.',
      },
    },
  },
  render: (args) => (
    <div className="w-screen h-screen bg-white">
      <GridTabletHorizontal {...args}>
        {items.map((item) => (
          <div
            key={item}
            className="bg-gray-100 border border-gray-400 rounded flex items-center justify-center text-sm text-gray-700"
            style={{ height: '100vh' }}
          >
            {item}
          </div>
        ))}
      </GridTabletHorizontal>
    </div>
  ),
};
