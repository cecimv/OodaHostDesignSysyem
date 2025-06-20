import type { Meta, StoryObj } from "@storybook/react";
import { ButtonPrimaryDarkmode } from "./Button-Primary-Darkmode";
import { Plus } from 'lucide-react';

const meta = {
    title: "Components/Button-Primary-Darkmode",
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
                story: "Button indicates the main action, and there is only one primary button for one action section.",
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
                story: "Button indicates the main action, and there is only one primary button for one action section.",
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
                story: "Button indicates the main action, and there is only one primary button for one action section.",
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
