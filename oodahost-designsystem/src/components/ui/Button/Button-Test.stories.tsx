import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLightmode } from '@/components/ui/Button/Button-Lightmode';

const meta: Meta<typeof ButtonLightmode> = {
  title: 'Components/MCPTest/ButtonTest',
  component: ButtonLightmode,
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

type Story = StoryObj<typeof ButtonLightmode>;

export const primaryTextOnlySimple: Story = {
  args: {
    children: 'Text',
    variant: 'primaryTextOnly',
    size: 'md',
  },
};
