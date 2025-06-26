import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "example/Button",
  component: Button,
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
} satisfies Meta<typeof Button>;

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
    children: "Outline Button this",
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
      <Button size="sm" variant="primary">
        Small
      </Button>
      <Button size="md" variant="primary">
        Medium
      </Button>
      <Button size="lg" variant="primary">
        Large
      </Button>
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
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
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
      <Button variant="primary" disabled>
        Disabled Primary
      </Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
      <Button variant="ghost" disabled>
        Disabled Ghost
      </Button>
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
