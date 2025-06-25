import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle/Switch is a component that allows enabling or disabling an option with two states: on and off. Its used to control binary settings like notifications or dark mode. Visually, its a sliding switch that changes based on its state and is accessible via click, touch, or keyboard.',
      },
    },
  },
};


export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  name: 'Default (Checked)',
  args: {
    checked: true,
    label: ' ',
  },
  parameters:{
    docs:{
      description:{
        story: 'Shows the toggle without text with the switch turned on (checked) by default.',
      }
    },
  },
};

export const Unchecked: Story = {
  name: 'Default (Unchecked)',
  args: {
    checked: false,
    label: ' ',
  },
  parameters:{
    docs: {
      description:{
        story: 'Shows the toggle without text with the switch turned off (unchecked).',
      },
    },
  },
};

export const ToggleWithText: Story = {
  name: 'Interactive (ON/OFF Text)',
  args: {
    showText: true,
  },
  parameters:{
    docs: {
      description:{
        story: 'Example of a toggle whose state (on or off) is controlled externally via props. It contains text indicating its current state and demonstrates how to manage the toggle from a parent component.',
      },
    },
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Toggle {...args} checked={checked} onChange={setChecked} />;
  },
};

export const ToggleControlled: Story = {
  name: 'Interactive (No Text)',
  parameters:{
    docs: {
      description:{
        story: 'Example of a toggle whose state (on or off) is controlled externally via props. It has no text but demonstrates how to manage the toggle from a parent component.',
      },
    },
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return <Toggle {...args} checked={checked} onChange={setChecked} />;
  },
};

export const DisabledChecked: Story = {
  name: 'Disabled (Checked)',
  args: {
    checked: true,
    disabled: true,
  },
  parameters:{
    docs: {
      description:{
        story: 'Shows the toggle turned on but disabled, so the user cannot change it. It is only for displaying the active state without allowing interaction.',
      },
    },
  },
};

export const DisabledUnchecked: Story = {
  name: 'Disabled (Unchecked)',
  args: {
    checked: false,
    disabled: true,
  },
  parameters:{
    docs: {
      description:{
        story: 'Displays the toggle turned off and disabled so the user cannot change it. It is only to show the current state of the toggle (off) without allowing interaction.',
      },
    },
  },
};

export const DisabledTextOn: Story = {
  name: 'Disabled with Text (ON)',
  args: {
    showText: true,
    checked: true,
    disabled: true,
  },
  parameters:{
    docs: {
      description:{
        story: 'Shows the toggle turned on with the text “on” and disabled, with no possibility to change the state. It indicates a fixed active state.',
      },
    },
  },
};

export const DisabledTextOff: Story = {
  name: 'Disabled with Text (OFF)',
  args: {
    showText: true,
    checked: false,
    disabled: true,
  },
  parameters:{
    docs: {
      description:{
        story: 'Shows the toggle turned off with the text “off” and disabled, with no interaction possible. It only displays the inactive state.',
      },
    },
  },
};
