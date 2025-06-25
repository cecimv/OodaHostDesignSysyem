import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Mail, ChevronRight } from "lucide-react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/LeftRightIcon",
  component: Dropdown,
  argTypes: {
    placeholder: {
      description: 'Text shown when no option is selected; guides the user.',
      control: 'text',
      defaultValue: 'Select option',
    },
    disabled: {
      description: 'Indicates if the dropdown is disabled and not interactive.',
      control: 'boolean',
      defaultValue: false,
    },
    variant: {
      description: 'Visual variant of the dropdown.',
      control: { type: 'select' },
      options: ['onlyText', 'leftIcon', 'rightIcon', 'leftRightIcon', 'avatarleft'],
      defaultValue: 'onlyText',
    },
    leftIcon: {
      description: 'React component displayed as icon on the left side.',
      control: false,
    },
    rightIcon: {
      description: 'React component displayed as icon on the right side.',
      control: false,
    },
    options: {
      description: 'Array of options available to select from.',
      control: false,
    },
    selected: {
      description: 'Currently selected option.',
      control: false,
    },
    onSelect: {
      description: 'Function triggered when selecting an option; receives the selected value as a string.',
      action: 'onSelect',
    },
    name: {
      description: 'Name or label identifying the dropdown.',
      control: 'text',
      defaultValue: 'User',
    },
    size: {
      description: 'Visual size of the dropdown.',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
  },
  
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'This Dropdown variant displays a mail icon aligned to the left and an arrow (>) aligned to the right of each option. It’s useful for indicating message or email-related options and providing a visual cue for expandability or selection.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const optionsText = [
  { value: "opt1", label: "menu item" },
  { value: "opt2", label: "menu item" },
  { value: "opt3", label: "menu item" },
];

export const LeftRightIcon: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'This Dropdown variant displays a mail icon aligned to the left and an arrow (>) aligned to the right of each option. It’s useful for indicating message or email-related options and providing a visual cue for expandability or selection.',
      },
    },
  },
    args: {
      placeholder: "menu item",
      disabled: false,
      variant: "leftRightIcon",
      leftIcon: <Mail size={20} />,
      rightIcon: <ChevronRight size={20} />,
    },
    render: (args) => {
      const [selected, setSelected] = useState<typeof optionsText[0] | undefined>(undefined);
      return (
        <Dropdown {...args} options={optionsText} selected={selected} onSelect={(val) => {
          const sel = optionsText.find((o) => o.value === val);
          if (sel) setSelected(sel);
        }} />
      );
    },
  };

  export const LeftRightIconDisabled: Story = {
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          story: 'In this variant, the dropdown option displays a mail icon on the left and a > arrow on the right, and is in a disabled state.',
        },
      },
    },
    args: {
      placeholder: "menu item",
      disabled: true,
      variant: "leftRightIcon",
      leftIcon: <Mail size={20} />,
      rightIcon: <ChevronRight size={20} />,
    },
  };

export const AllSizesLeftRightIcon: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The leftRightIcon variant displays an icon on the left (mail) and another on the right (like an arrow >), and can be adjusted across different sizes to fit various visual contexts.',
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<typeof optionsText[0]>(optionsText[0]);

    return (
      <div className="flex items-center gap-4">
        <Dropdown
          variant="leftRightIcon"
          size="sm"
          options={optionsText}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsText.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          leftIcon={<Mail size={16} />}
          rightIcon={<ChevronRight size={16} />}
        />
        <Dropdown
          variant="leftRightIcon"
          size="md"
          options={optionsText}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsText.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          leftIcon={<Mail size={20} />}
          rightIcon={<ChevronRight size={20} />}
        />
        <Dropdown
          variant="leftRightIcon"
          size="lg"
          options={optionsText}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsText.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          leftIcon={<Mail size={24} />}
          rightIcon={<ChevronRight size={24} />}
        />
      </div>
    );
  },
};
