import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Checkbox component allows users to toggle a binary option on or off. Visually, it appears as a small box that can either be checked or unchecked. Unlike radio buttons, checkboxes operate independently, enabling the selection of multiple options within a group. This component is commonly used in forms or settings interfaces where individual options need to be enabled or disabled.',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the checkbox.',
    },
    label: {
      control: 'text',
      description: 'Visible label next to the checkbox.',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state of the checkbox.',
      defaultValue: false,
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for styling customization.',
      defaultValue: '',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox, preventing interaction.',
      defaultValue: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const WithLabel: Story = {
  args: {
    id: 'opt1',
    label: 'Label',
  },
  parameters: {
    docs: {
      description: {
        story: 'This checkbox includes a descriptive label, allowing users to easily understand the associated option. It is interactive and its state can be toggled between checked and unchecked.',
      },
    },
  },
};

  export const CheckedWithLabelDisabled: Story = {
    args: {
        id: 'opt3',
        label: 'Label',
        defaultChecked: true,
        disabled: true,
    },
    parameters: {
      docs: {
        description: {
          story: 'The checkbox is pre-selected and includes a visible label, but it is disabled. This indicates that the option is active but cannot be changed by the user.',
        },
      },
    },
  };
  

export const UncheckedWithLabelDisabled: Story = {
  args: {
      id: 'opt3',
      label: 'Label',
      defaultChecked: false,
      disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The checkbox appears unchecked and has a visible label, but it is non-interactive. It communicates that the option is available but currently not selectable.',
      },
    },
  },
};

export const WhitoutLabel: Story = {
  args: {
    id: 'opt2',
    label: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'A simple checkbox with no visible label. This is typically used when visual or contextual elements provide the necessary description externally.',
      },
    },
  },
};

export const CheckedDisabled: Story = {
  args: {
      id: 'opt4',
      label: '',
      defaultChecked: true,
      disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A checkbox that is both selected and disabled, with no label. Its used when the state must be shown but no user interaction or textual reference is needed.',
      },
    },
  },
};

export const UncheckedDisabled: Story = {
  args: {
      id: 'opt4',
      label: '',
      defaultChecked: false,
      disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'An unselected and non-interactive checkbox without any label. Its generally used in very specific contexts where the meaning is clear from the surrounding content.',
      },
    },
  },
};


