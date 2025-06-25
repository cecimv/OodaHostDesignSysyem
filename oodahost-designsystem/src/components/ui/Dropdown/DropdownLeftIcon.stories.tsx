import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Mail } from "lucide-react";

const optionsText = [
  { value: "opt1", label: "menu item" },
  { value: "opt2", label: "menu item" },
  { value: "opt3", label: "menu item" },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/LeftIcon",
  component: Dropdown,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Text shown when no option is selected. Helps guide the user. Example: "Select option".',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the dropdown if true, preventing user interaction. Default is false.',
    },
    variant: {
      control: { type: 'select' },
      options: ['onlyText', 'leftIcon', 'rightIcon', 'leftRightIcon', 'avatarleft'],
      description: `Controls the visual style of the dropdown:
  - "onlyText": Displays plain text only.
  - "leftIcon": Adds an icon on the left side.
  - "rightIcon": Adds an icon on the right side.
  - "leftRightIcon": Icons on both left and right.
  - "avatarleft": Shows an avatar with user name on the left.`,
    },
    leftIcon: {
      control: false,
      description: 'Icon or React element displayed on the left side of the selected option or menu item.',
    },
    rightIcon: {
      control: false,
      description: 'Icon or React element displayed on the right side. Commonly used for dropdown arrows.',
    },
    options: {
      control: false,
      description: 'Required. Array of available options for the dropdown. Each option should have a label and value.',
    },
    selected: {
      control: false,
      description: 'Currently selected option. Should match one of the values from the "options" array.',
    },
    onSelect: {
      action: 'onSelect',
      description: 'Callback function triggered when an option is selected. Receives the selected value.',
    },
    name: {
      control: 'text',
      description: 'Text label used in the "avatarleft" variant to show the user name next to the avatar.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the dropdown. Controls padding, font size, and icon sizes. Default is "md".',
    },
  },
  
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'This Dropdown variant displays a mail icon aligned to the left of each option. Its great for representing messages, emails, notifications, or communication-related actions.',
      },
    },
    
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const LeftIcon: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'This Dropdown variant displays a mail icon aligned to the left of each option. Its great for representing messages, emails, notifications, or communication-related actions.',
      },
    },
  },
  
    args: {
      placeholder: "menu item",
      disabled: false,
      variant: "leftIcon",
      leftIcon: <Mail size={20} />,
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

  export const LeftIconDisabled: Story = {
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          story: 'This variant combines the left icon with the disabled state, indicating that the option is not available for selection or interaction.',
        },
      },
    },
    args: {
      placeholder: "menu item",
      disabled: true,
      variant: "leftIcon",
      leftIcon: <Mail size={20} />,
    },
  };

export const AllSizesLeftIcon: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The leftIcon variant can be used across different sizes to fit various UI contexts by adjusting the icon and corresponding text sizes.',
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<typeof optionsText[0]>(optionsText[0]);

    return (
      <div className="flex items-center gap-4">
        <Dropdown
          variant="leftIcon"
          size="sm"
          options={optionsText}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsText.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          leftIcon={<Mail size={16} />}
        />
        <Dropdown
          variant="leftIcon"
          size="md"
          options={optionsText}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsText.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          leftIcon={<Mail size={20} />}
        />
        <Dropdown
          variant="leftIcon"
          size="lg"
          options={optionsText}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsText.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          leftIcon={<Mail size={24} />}
        />
      </div>
    );
  },
};
