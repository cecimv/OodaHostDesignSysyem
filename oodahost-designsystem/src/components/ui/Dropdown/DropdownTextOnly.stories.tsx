import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const optionsText = [
  { value: "opt1", label: "menu item" },
  { value: "opt2", label: "menu item" },
  { value: "opt3", label: "menu item" },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/OnlyText",
  component: Dropdown,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Text shown when no option is selected, guiding the user.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the dropdown, preventing user interaction.',
    },
    variant: {
      control: { type: 'select' },
      options: ['onlyText', 'leftIcon', 'rightIcon', 'leftRightIcon', 'avatarleft'],
      description: 'Defines the visual style and position of icons or avatar inside the dropdown.',
    },
    options: {
      control: false,
      description: 'Array of available options for selection. (Required)',
    },
    selected: {
      control: false,
      description: 'Currently selected option.',
    },
    onSelect: {
      action: 'onSelect',
      description: 'Function triggered when an option is selected; receives the selected value.',
    },
    leftIcon: {
      control: false,
      description: 'React element shown to the left of the text or menu item.',
    },
    rightIcon: {
      control: false,
      description: 'React element shown to the right of the text or menu item.',
    },
    name: {
      control: 'text',
      description: 'Text representing a name or label, especially used in the `avatarleft` variant.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the dropdown, adjusts padding, font size, and icon size.',
    },
  },  
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The onlyText variant displays dropdown options using only text, without icons or avatars. It is the simplest and cleanest form of the component, ideal when users need to select based on clear labels without additional visual elements.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const OnlyText: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The onlyText variant displays dropdown options using only text, without icons or avatars. It is the simplest and cleanest form of the component, ideal when users need to select based on clear labels without additional visual elements.',
      },
    },
  },
  args: {
    placeholder: "menu item",
    disabled: false,
    variant: "onlyText",
  },
  render: (args) => {
    const [selected, setSelected] = useState<typeof optionsText[0] | undefined>(undefined);
    return (
      <Dropdown
        {...args}
        options={optionsText}
        selected={selected}
        onSelect={(val) => {
          const sel = optionsText.find((o) => o.value === val);
          if (sel) setSelected(sel);
        }}
      />
    );
  },
};

export const OnlyTextDisabled: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'When the dropdown is in the onlyText variant and disabled (disabled), it shows only text and does not allow interaction. This means the user cannot change the selection.',
      },
    },
  },
  args: {
    placeholder: "menu item",
    disabled: true,
    variant: "onlyText",
  },
};

export const AllSizesOnlyText: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The onlyText variant is available in all sizes (sm, md, lg). For each size, the dropdown shows text only, adjusting font size, padding, and spacing to fit the selected size.',
      },
    },
  },
    render: () => {
      const [selected, setSelected] = useState<typeof optionsText[0]>(optionsText[0]);
  
      return (
        <div className="flex items-center gap-4">
          <Dropdown
            variant="onlyText"
            size="sm"
            options={optionsText}
            selected={selected}
            onSelect={(val) => {
              const sel = optionsText.find((o) => o.value === val);
              if (sel) setSelected(sel);
            }}
          />
          <Dropdown
            variant="onlyText"
            size="md"
            options={optionsText}
            selected={selected}
            onSelect={(val) => {
              const sel = optionsText.find((o) => o.value === val);
              if (sel) setSelected(sel);
            }}
          />
          <Dropdown
            variant="onlyText"
            size="lg"
            options={optionsText}
            selected={selected}
            onSelect={(val) => {
              const sel = optionsText.find((o) => o.value === val);
              if (sel) setSelected(sel);
            }}
          />
        </div>
      );
    },
  };