import type { Meta, StoryObj } from "@storybook/react";
import { ButtonPrimaryDarkmode } from "./Button-Primary-Darkmode";
import { Plus } from 'lucide-react';

const meta = {
    title: "Components/Button/Button-Primary-Darkmode",
    component: ButtonPrimaryDarkmode,
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
            options: ["primaryTextOnly", "primaryLeftIcon", "primaryRightIcon"],
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
} satisfies Meta<typeof ButtonPrimaryDarkmode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primaryTextOnly: Story = {
    args: {
        children: "Text",
        variant: "primaryTextOnly",
        size: "md",
    },
    parameters: {
        docs: {
            description: {
                story: "Primary button with text only, used to represent a main action in a direct and simple way, without visual distractions. Ideal when the text alone clearly communicates the intent of the action, such as 'Save' or 'Accept'.",
            },
        },
    },
};

export const primaryLeftIcon: Story = {
    args: {
        children: "+ Text",
        variant: "primaryTextOnly",
        size: "md",
    },
    parameters: {
        docs: {
            description: {
                story: "Primary button with an icon aligned to the left of the text, useful when you want to visually reinforce the button's action (e.g., a '+' icon for 'Add') and support quick user understanding. This design is common in modern interfaces and enhances visual accessibility.",
            },
        },
    },
};

export const primaryRightIcon: Story = {
    args: {
        children: "Text +",
        variant: "primaryTextOnly",
        size: "md",
    },
    parameters: {
        docs: {
            description: {
                story: "Primary button with an icon aligned to the right of the text, used when you want to add a subtle visual cue without interfering with the natural reading flow. It is also useful when the button is part of lists, menus, or flows with directional structure.",
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
    <div className="flex flex-col gap-6">
        {/* Botones solo texto */}
        <div className="flex items-center gap-4">
            <ButtonPrimaryDarkmode size="sm" variant="primaryTextOnly">
            Text
            </ButtonPrimaryDarkmode>
            <ButtonPrimaryDarkmode size="md" variant="primaryTextOnly">
            Text
            </ButtonPrimaryDarkmode>
            <ButtonPrimaryDarkmode size="lg" variant="primaryTextOnly">
            Text
            </ButtonPrimaryDarkmode>
        </div>
        
        {/* Botones con icono izquierdo */}
        <div className="flex items-center gap-4">
            <ButtonPrimaryDarkmode size="sm" variant="primaryLeftIcon" leftIcon={<Plus className="w-4 h-4" />}>Text</ButtonPrimaryDarkmode>
            <ButtonPrimaryDarkmode size="md" variant="primaryLeftIcon" leftIcon={<Plus className="w-4 h-4" />}>Text</ButtonPrimaryDarkmode>
            <ButtonPrimaryDarkmode size="lg" variant="primaryLeftIcon" leftIcon={<Plus className="w-4 h-4" />}>Text</ButtonPrimaryDarkmode>
        </div>
        
        {/* Botones con icono derecho */}
        <div className="flex items-center gap-4">
            <ButtonPrimaryDarkmode size="sm" variant="primaryRightIcon" rightIcon={<Plus className="w-4 h-4" />}>Text</ButtonPrimaryDarkmode>
            <ButtonPrimaryDarkmode size="md" variant="primaryRightIcon" rightIcon={<Plus className="w-4 h-4" />}>Text</ButtonPrimaryDarkmode>
            <ButtonPrimaryDarkmode size="lg" variant="primaryRightIcon" rightIcon={<Plus className="w-4 h-4" />}>Text</ButtonPrimaryDarkmode>
        </div>
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
        <ButtonPrimaryDarkmode variant="primaryTextOnly">Text</ButtonPrimaryDarkmode>
        <ButtonPrimaryDarkmode variant="primaryLeftIcon" leftIcon={<Plus className="w-4 h-4" />}>Text</ButtonPrimaryDarkmode>
        <ButtonPrimaryDarkmode variant="primaryRightIcon" rightIcon={<Plus className="w-4 h-4" />}>Text</ButtonPrimaryDarkmode>
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
        <ButtonPrimaryDarkmode variant="primaryTextOnly" disabled>Text</ButtonPrimaryDarkmode>
        <ButtonPrimaryDarkmode variant="primaryLeftIcon" leftIcon={<Plus className="w-4 h-4" />} disabled>Text</ButtonPrimaryDarkmode>
        <ButtonPrimaryDarkmode variant="primaryRightIcon" rightIcon={<Plus className="w-4 h-4" />} disabled>Text</ButtonPrimaryDarkmode>
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
