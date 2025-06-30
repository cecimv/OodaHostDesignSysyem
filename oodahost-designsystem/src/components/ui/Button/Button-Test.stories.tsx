import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLightmode } from '@/components/ui/Button/Button-Lightmode'; // importa tu componente Input

const meta: Meta<typeof ButtonLightmode> = {
    title: 'components/MCPTest/ButtonTest',
    component: ButtonLightmode,
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

type Story = StoryObj<typeof ButtonLightmode>;

export const primaryTextOnlySimple: Story = (args: React.ComponentProps<typeof ButtonLightmode>) => <ButtonLightmode {...args} />;primaryTextOnlySimple.args = {
    children: "Text",
    variant: "primaryTextOnly",
    size: "md",
  };