import type { Meta, StoryObj } from "@storybook/react";
import { Users } from "./Users"; // Cambia el import al nombre correcto

const meta: Meta<typeof Users> = {
  title: "Components/Users/Users",
  component: Users,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Users component displays a list or collection of users, facilitating the viewing, management, or selection of profiles within an application. It may include basic information such as name, avatar, role, and status. It is useful for functionalities like user administration or user monitoring.',
      },
    },
  },
  argTypes: {
    Icon: { description: "React element representing a custom icon. Can be any React node, such as an image or SVG.", control: false, },
    size: { description: "Size of the component or icon. Allowed values: 'xs', 'sm', 'md', 'lg', 'xl'.", control: {  type: "radio", options: ["xs", "sm", "md", "lg", "xl"], }, defaultValue: "md", },
    placeholder: { description: "Text shown as a placeholder inside an input field when no value is entered.", control: "text", },
    name: { description: "Name of the field or component, used to identify it.", control: "text", defaultValue: "User", },
    disabled: { description: "Indicates whether the component is disabled and inactive for user interaction.", control: "boolean", defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Users>;

export const UserImage: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The User Image component displays a users picture or avatar. It usually supports different sizes, image loading options, and styles such as borders or shadows. It is essential for visually identifying users within the interface and enhancing personalization experience.',
      },
    },
  },
  args: {
    Icon: (
      <img
        src="https://i.pravatar.cc/32"
        alt="avatar"
        className="w-full h-full object-cover"
      />
    ),
    size: "md",
  },
  render: (args) => {

    return <Users {...args} />;
  },
};

export const UserName: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The User Name component displays the users initials instead of the full name or last name. It is useful for representing users when an image is not available or for more compact interfaces. ',
      },
    },
  },
  args: {
    name: "Carlos Lopez",
    size: "md",
  },
  render: (args) => {

    return <Users {...args} />;
  },
};

export const UserNameAllSizes: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The User Name All Sizes component displays the users initials in all available sizes within the design system. This allows seeing how the component adapts to different contexts, from compact interfaces to larger views, while maintaining readability and consistent style.',
      },
    },
  },
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
    const names = [
      "Lucero Perales",
      "Alejandro Herrera",
      "Carlos Lopez",
      "Melisa Gomez",
      "Ricardo Torres",
      "Daniela Ortega"
    ];

    return (
      <div className="flex flex-col gap-6">
        {names.map((name, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-6">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col items-center gap-1">
                <Users name={name} size={size} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const UserNameAllSizesDisabled: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The User Name All Sizes Disabled component displays the users initials in all available sizes within the system, but in a disabled state. This helps demonstrate how the component appears when inactive or non-interactive, maintaining visual consistency and accessibility across different contexts.',
      },
    },
  },
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
    const names = [
      "Lucero Perales",
      "Alejandro Herrera",
      "Carlos Lopez",
      "Melisa Gomez",
      "Ricardo Torres",
      "Daniela Ortega"
    ];

    return (
      <div className="flex flex-col gap-6">
        {names.map((name, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-6">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col items-center gap-1">
                <Users name={name} size={size} disabled/>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const UsersAllSizes: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The Users All Sizes component displays user profiles in all system sizes. It allows you to see how they adjust across different screen sizes, app locations (such as menus or main pages), and compact or detailed layouts, ensuring visual consistency and usability.',
      },
    },
  },
  args:{
    name: "Carlos Lopez",
    size: "md",
  },
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
    const avatarUrls = [
      "https://i.pravatar.cc/32",
      "https://i.pravatar.cc/31",
      "https://i.pravatar.cc/30",
      "https://i.pravatar.cc/34",
      "https://i.pravatar.cc/36",
      "https://i.pravatar.cc/37",
    ];
  
    return (
      
      <div className="flex flex-col gap-6">
        {avatarUrls.map((url, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-6">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col items-center gap-1">
                <Users
                  size={size}
                  Icon={
                    <img
                      src={url}
                      alt="avatar"
                      className="w-full h-full object-cover"
                      
                    />
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
  
};

