import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { ChevronRight } from "lucide-react";

const optionsText = [
  { value: "opt1", label: "menu item" },
  { value: "opt2", label: "menu item" },
  { value: "opt3", label: "menu item" },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/RightIcon",
  component: Dropdown,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Text shown when no option is selected.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the component, preventing user interaction.',
    },
    variant: {
      control: { type: 'select' },
      options: ['onlyText', 'leftIcon', 'rightIcon', 'leftRightIcon', 'avatarleft'],
      description: 'Controls the visual style and placement of icons or avatar. Options: "onlyText" (default), "leftIcon", "rightIcon", "leftRightIcon", "avatarleft".',
    },
    rightIcon: {
      control: false,
      description: 'React element displayed on the right side (e.g., dropdown arrow).',
    },
    options: {
      control: false,
      description: 'Array of available options to select from. Required.',
    },
    selected: {
      control: false,
      description: 'Currently selected option.',
    },
    onSelect: {
      action: 'onSelect',
      description: 'Function called when an option is selected; receives the selected value.',
    },
    leftIcon: {
      control: false,
      description: 'React element displayed on the left side (e.g., avatar or icon).',
    },
    name: {
      control: 'text',
      description: 'Text representing the name or label, used in the "avatarleft" variant.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Component size affecting padding, text, and icon sizes.',
    },
  },
  
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The rightIcon variant displays an icon or symbol aligned to the right within the dropdown or menu. Here, a right arrow (>) is used to indicate the option can expand to a submenu or leads to another action.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const RightIcon: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The rightIcon variant displays an icon or symbol aligned to the right within the dropdown or menu. Here, a right arrow (>) is used to indicate the option can expand to a submenu or leads to another action.',
      },
    },
  },
    args: {
      placeholder: "menu item",
      disabled: false,
      variant: "rightIcon",
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

export const RightIconDisabled: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Displays an icon on the right (rightIcon) along with the disabled state, indicating that the option is not available for interaction.',
      },
    },
  },
    args: {
      placeholder: "menu item",
      disabled: true,
      variant: "rightIcon",
      rightIcon: <ChevronRight size={20} />,
    },
  };

// Story que muestra todos los tamaños juntos con RightIcon
export const AllSizesRightIcon: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The rightIcon variant can be used across different sizes to fit various visual contexts by adjusting the icon size and spacing.',
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<typeof optionsText[0]>(optionsText[0]);

    return (
      <div className="flex items-center gap-4">
        <Dropdown
          variant="rightIcon"
          size="sm"
          options={optionsText}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsText.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          rightIcon={<ChevronRight size={16} />}
        />
        <Dropdown
          variant="rightIcon"
          size="md"
          options={optionsText}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsText.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          rightIcon={<ChevronRight size={20} />}
        />
        <Dropdown
          variant="rightIcon"
          size="lg"
          options={optionsText}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsText.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          rightIcon={<ChevronRight size={24} />}
        />
      </div>
    );
  },
};
