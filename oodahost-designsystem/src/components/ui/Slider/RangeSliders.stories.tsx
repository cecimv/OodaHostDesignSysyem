import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './Slider';

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/Sliders/Range',
  component: RangeSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs:{
      description:{
        component: 'A slider with two thumbs that allows selecting a range of values within a defined interval. As the user moves either thumb, a tooltip shows the currently selected value.',
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
    showLabel: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Range: Story = {
  // Usará args por defecto: showLabel: false, disabled: false
};

export const RangeTooltip: Story = {
  args: {
    showLabel: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A slider with two thumbs that allows selecting a range of values within a defined interval. As the user moves either thumb, a tooltip shows the currently selected value.',
      },
    },
  },
};

export const RangeDisabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A visible but disabled slider with two thumbs that does not allow interaction. It indicates that range selection is currently unavailable.',
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
        story: 'A slider with two thumbs that includes ticks along the track to indicate specific positions or values within the range.',
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
        story: 'A slider with two thumbs that displays both ticks and labels along the track to clearly indicate values at those positions within the selected range.',
      },
    },
  },
};
