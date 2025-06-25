import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/Avatar",
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Avatar (or Profile) component is used to display a users profile image. Its ideal for visually representing user identity in interfaces like user cards, menus, headers, comments, or lists.',
      },
    },
  },
  argTypes : {
      placeholder: { 
        control: 'text',
        description: 'Text shown when no option is selected.',
      },
      disabled: { 
        control: 'boolean',
        description: 'Disables the dropdown, preventing user interaction.',
      },
      variant: { 
        control: { type: 'select' }, 
        options: ['onlyText', 'leftIcon', 'rightIcon', 'leftRightIcon', 'avatarleft'],
        description: 'Visual style of the dropdown. Options: "onlyText", "leftIcon", "rightIcon", "leftRightIcon", "avatarleft".',
      },
      leftIcon: { 
        control: false,
        description: 'Icon or element displayed on the left side of the selected option or placeholder.',
      },
      rightIcon: { 
        control: false,
        description: 'Icon or element displayed on the right side.',
      },
      name: { 
        control: 'text',
        description: 'User name displayed in the "avatarleft" variant.',
      },
      options: { 
        control: false,
        description: 'Array of selectable options. Required prop.',
      },
      selected: { 
        control: false,
        description: 'Currently selected option.',
      },
      onSelect: { 
        action: 'onSelect',
        description: 'Callback function triggered when an option is selected.',
      },
      size: { 
        control: { type: 'select' }, 
        options: ['sm', 'md', 'lg'],
        description: 'Size of the dropdown component. Options: "sm", "md", "lg".',
      },
    },    
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const optionsAvatar = [
  { value: "user1", label: "menu item" },
  { value: "user2", label: "menu item" },
];

export const AvatarLeft: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The avatarleft variant is used to render menu items (like dropdowns or user menus) with a left-aligned avatar and the user name or label to the right.',
      },
    },
  },
  args: {
    placeholder: "menu item",
    disabled: false,
    variant: "avatarleft",
    leftIcon: (
      <img
        src="https://i.pravatar.cc/32?u=cristina"
        alt="avatar"
        className="w-full h-full object-cover"
      />
    ),
    name: "Cristina Medina",
  },
  render: (args) => {
    const [selected, setSelected] = useState<typeof optionsAvatar[0] | undefined>(undefined);

    return (
      <Dropdown
        {...args}
        options={optionsAvatar}
        selected={selected}
        onSelect={(val) => {
          const sel = optionsAvatar.find((o) => o.value === val);
          if (sel) setSelected(sel);
        }}
      />
    );
  },
};


export const AvatarLeftDisabled: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'This variant combines the avatarleft style (left avatar + user name) with the disabled state, making the menu item non-interactive.',
      },
    },
  },
    args: {
      placeholder: "menu item",
      disabled: true,
      variant: "avatarleft",
      name: "Ooda Host",
    },
  };

export const AllSizesAvatarLeft: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The avatarleft variant supports multiple sizes (sm, md, lg) to fit various UI contexts. Both avatar and label scale proportionally based on the selected size.',
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<typeof optionsAvatar[0]>(optionsAvatar[0]);

    return (
      <div className="flex items-center gap-4">
        <Dropdown
          variant="avatarleft"
          size="sm"
          options={optionsAvatar}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsAvatar.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          leftIcon={
            <img
              src="https://i.pravatar.cc/32?u=cristina"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          }
          name="Cristina Medina"
        />
        <Dropdown
          variant="avatarleft"
          size="md"
          options={optionsAvatar}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsAvatar.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          leftIcon={
            <img
              src="https://i.pravatar.cc/32?u=cristina"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          }
          name="Cristina Medina"
        />
        <Dropdown
          variant="avatarleft"
          size="lg"
          options={optionsAvatar}
          selected={selected}
          onSelect={(val) => {
            const sel = optionsAvatar.find((o) => o.value === val);
            if (sel) setSelected(sel);
          }}
          leftIcon={
            <img
              src="https://i.pravatar.cc/32?u=cristina"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          }
          name="Cristina Medina"
        />
      </div>
    );
  },
};
