import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/Input/Input'; // importa tu componente Input

const meta: Meta<typeof Input> = {
    title: 'components/MCPTest/InputTest',
    component: Input,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'This is an example test.',
        },
      },
    },
  };
  export default meta;

type Story = StoryObj<typeof Input>;

export const TextSimple: Story = (args: React.ComponentProps<typeof Input>) => <Input {...args} />;
TextSimple.args = {
  id: 'input-name',
  label: ' ',
  type: 'text',
  placeholder: 'Text',
};