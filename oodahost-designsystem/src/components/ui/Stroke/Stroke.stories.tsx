import type { Meta, StoryObj } from '@storybook/react';
import { Strokes, StrokeCircle } from './Stroke';

const meta: Meta<typeof Strokes> = {
  title: 'components/Stroke/Strokes',
  component: Strokes,
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A stroke refers to the outline or border applied to a visual element, such as a button, icon, input field, card, etc.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Strokes>;

interface StrokesProps {
    className?: string;
    showDetails?: boolean;
  }

export const DefaultStroke: React.FC<StrokesProps> = ({
    className = '',
    showDetails = true,
  }) => {
    const strokeConfigs = [
      { size: 'S' as const, strokeWidth: 0.8 },
      { size: 'M' as const, strokeWidth: 1.6 },
      { size: 'L' as const, strokeWidth: 2 },
      { size: 'XL' as const, strokeWidth: 2.4 },
    ];
  
    return (
      <div className={`p-8 bg-gray-50 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
          {strokeConfigs.map((config) => (
            <StrokeCircle
              key={config.size}
              size={config.size}
              strokeWidth={config.strokeWidth}
              className="p-6"
              showDetails={showDetails}
            />
          ))}
        </div>
      </div>
    );
    
  };

  export const StrokeS: Story = {
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          story: 'This is a thin stroke or border applied inside the element (e.g., an icon or container), with a thickness of 0.8 pixels. Its ideal for subtle outlines that dont increase the total size of the component or affect external alignment.',
        },
      },
    },
    render: () => (
      <div className="p-8">
        <StrokeCircle size="S" strokeWidth={0.8} color="#10B981" />
      </div>
    ),
    name: "Stroke S",
  };

export const StrokeM: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'A medium-weight stroke applied inside the edge of an element. At 1.6 pixels thick, it is more noticeable than Stroke S and commonly used for interactive elements or when stronger visual contrast is needed.',
      },
    },
  },
  render: () => (
    <div className="p-8">
      <StrokeCircle size="M" strokeWidth={1.6} color="#10B981" />
    </div>
  ),
  name: "Stroke M",
};

export const StrokeL: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'A thick stroke applied inside the elements border, with a thickness of 2 pixels. It is used when strong visual separation is needed, for example, on active, selected, or prominently highlighted elements.',
      },
    },
  },
  render: () => (
    <div className="p-8">
      <StrokeCircle size="L" strokeWidth={2} color="#10B981" />
    </div>
  ),
  name: "Stroke L",
};

export const StrokeXL: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'An extra thick stroke applied inside the element’s border, with a thickness of 2.4 pixels. Used to prominently highlight important elements or areas requiring maximum visual emphasis.',
      },
    },
  },
  render: () => (
    <div className="p-8">
      <StrokeCircle size="XL" strokeWidth={2.4} color="#10B981" />
    </div>
  ),
  name: "Stroke XL",
};
