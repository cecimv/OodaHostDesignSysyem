import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/MCPTest/InputTest',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'This is an example test.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const TextSimple: Story = {
  args: {
    id: 'input-text',
    label: ' ',
    type: 'text',
    placeholder: 'Text',
  },
};
