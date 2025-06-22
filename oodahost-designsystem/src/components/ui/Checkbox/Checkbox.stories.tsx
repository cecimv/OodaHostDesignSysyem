import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
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
    id: 'default-checkbox',
    label: 'Label',
  },
};

export const WhitoutLabel: Story = {
    args: {
      id: 'default-checkbox',
      label: '',
    },
  };
  
export const WhitoutLabelDisabled: Story = {
    args: {
        id: 'default-checkbox',
        label: '',
        defaultChecked: true,
        disabled: true,
    }
}

