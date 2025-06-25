import type { Meta, StoryObj } from '@storybook/react';
import { BasicSlider } from './Slider';

const meta: Meta<typeof BasicSlider> = {
  title: 'Components/Sliders/BasicSlider',
  component: BasicSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs:{
      description:{
        component: 'A "basic slider" is a graphical user interface component that allows the user to select a value or range of values within a defined interval by sliding a control (called a thumb) along a track.',
      }
    }
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the slider.',
      defaultValue: false,
    },
    showLabel: {
      control: 'boolean',
      description: 'Show the tooltip with the value.',
      defaultValue: false,
    },
  },
  args: {
    disabled: false,
    showLabel: false,
  },
};

export default meta;
type Story = StoryObj<typeof BasicSlider>;

export const Basic: Story = {
  // Usa args por defecto: disabled = false, showLabel = false
};

export const BasicTooltip: Story = {
  args: {
    showLabel: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic slider with tooltip allows the user to select a value within a defined range. As the user drags the thumb, a tooltip displays the current selected value.',
      },
    },
  },
};

export const BasicDisabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic disabled slider is a visible slider that cannot be interacted with. It is used to indicate that the option is currently unavailable.',
      },
    },
  },
};

export const WithMarks: Story = {
  args: {
    showMarks: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic slider with marks is a slider that includes small ticks along the track to indicate specific positions or values within the range.',
      },
    },
  },
};

export const WithLabelAndMarks: Story = {
  args: {
    showLabel: true,
    showMarks: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic slider with labels and marks is a slider that shows both tick marks along the track and labels that indicate the values at those marks.',
      },
    },
  },
};
