import type { Meta, StoryObj } from "@storybook/react";
import { ButtonPrueba } from "./ButtonPrueba";

const meta = {
  title: "example/ButtonPrueba",
  component: ButtonPrueba,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A customizable button component built with Tailwind CSS v4 and Framer Motion animations. Features hover animations, focus states, and dark mode support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "outline"],
      description: "The visual style of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "The content of the button",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof ButtonPrueba>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "The primary button style with gray background and black text. Features hover and focus states.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "The secondary button style with light gray background and dark text. Adapts to dark mode automatically.",
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "An outline button with emerald border and text, fills with emerald color on hover.",
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "A ghost button with transparent background and subtle hover effect. Perfect for less prominent actions.",
      },
    },
  },
};

// Nuevas stories para mostrar las mejoras
export const AllSizes: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex items-center gap-4">
      <ButtonPrueba size="sm" variant="primary">
        Small
      </ButtonPrueba>
      <ButtonPrueba size="md" variant="primary">
        Medium
      </ButtonPrueba>
      <ButtonPrueba size="lg" variant="primary">
        Large
      </ButtonPrueba>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstration of all available button sizes.",
      },
    },
  },
};

export const AllVariants: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <ButtonPrueba variant="primary">Primary</ButtonPrueba>
      <ButtonPrueba variant="secondary">Secondary</ButtonPrueba>
      <ButtonPrueba variant="outline">Outline</ButtonPrueba>
      <ButtonPrueba variant="ghost">Ghost</ButtonPrueba>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstration of all available button variants.",
      },
    },
  },
};

export const DisabledStates: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <ButtonPrueba variant="primary" disabled>
        Disabled Primary
      </ButtonPrueba>
      <ButtonPrueba variant="secondary" disabled>
        Disabled Secondary
      </ButtonPrueba>
      <ButtonPrueba variant="outline" disabled>
        Disabled Outline
      </ButtonPrueba>
      <ButtonPrueba variant="ghost" disabled>
        Disabled Ghost
      </ButtonPrueba>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstration of disabled states for all button variants.",
      },
    },
  },
};