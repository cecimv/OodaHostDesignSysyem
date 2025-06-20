// Button.stories.js
import ButtonExample from './ButtonExample';

export default {
  title: 'example/ButtonExample',
  component: ButtonExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args:{
    variant:'primary',
    children:"Button",
  },
};

export const Secondary = {
  args:{
    variant:'secondary',
    children:"Button",
  },
};

export const Outlined = {
  args:{
    variant:'outlined',
    children:"Button",
  },
};

export const Small = {
  args: {
    size: 'small',
    variant: 'primary',
    children: 'Small Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    variant: 'primary',
    children: 'Large Button',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
};