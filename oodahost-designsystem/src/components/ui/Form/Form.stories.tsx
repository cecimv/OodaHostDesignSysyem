import type { Meta, StoryObj } from '@storybook/react';
import { FormSignUp } from './Form';
//import { FormContactUs } from './Form';

const meta: Meta<typeof FormSignUp> = {
  title: 'Examples/Form/FormValidation',
  component: FormSignUp,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FormSignUp>;

export const Default: Story = {};
