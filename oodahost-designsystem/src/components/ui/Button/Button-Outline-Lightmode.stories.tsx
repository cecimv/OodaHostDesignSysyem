import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLightmode } from "./Button-Lightmode";
import { Plus } from 'lucide-react';

const meta = {
    title: "Components/Button/Button-Outline-Lightmode",
    component: ButtonLightmode,
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
            options: ["outlineTextOnly", "outlineLeftIcon", "outlineRightIcon"],
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
} satisfies Meta<typeof ButtonLightmode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const outlineTextOnly: Story = {
    args: {
        children: "Text",
        variant: "outlineTextOnly",
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

export const outlineLeftIcon: Story = {
    args: {
        children: "+ Text",
        variant: "outlineLeftIcon",
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

export const outlineRightIcon: Story = {
    args: {
        children: "Text +",
        variant: "outlineRightIcon",
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
            <ButtonLightmode size="sm" variant="outlineTextOnly">
            Text
            </ButtonLightmode>
            <ButtonLightmode size="md" variant="outlineTextOnly">
            Text
            </ButtonLightmode>
            <ButtonLightmode size="lg" variant="outlineTextOnly">
            Text
            </ButtonLightmode>
        </div>
        
        {/* Botones con icono izquierdo */}
        <div className="flex items-center gap-4">
            <ButtonLightmode size="sm" variant="outlineLeftIcon" leftIcon={<Plus className="w-4 h-4" />}>Text</ButtonLightmode>
            <ButtonLightmode size="md" variant="outlineLeftIcon" leftIcon={<Plus className="w-4 h-4" />}>Text</ButtonLightmode>
            <ButtonLightmode size="lg" variant="outlineLeftIcon" leftIcon={<Plus className="w-4 h-4" />}>Text</ButtonLightmode>
        </div>
        
        {/* Botones con icono derecho */}
        <div className="flex items-center gap-4">
            <ButtonLightmode size="sm" variant="outlineRightIcon" rightIcon={<Plus className="w-4 h-4" />}>Text</ButtonLightmode>
            <ButtonLightmode size="md" variant="outlineRightIcon" rightIcon={<Plus className="w-4 h-4" />}>Text</ButtonLightmode>
            <ButtonLightmode size="lg" variant="outlineRightIcon" rightIcon={<Plus className="w-4 h-4" />}>Text</ButtonLightmode>
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
        <ButtonLightmode variant="outlineTextOnly">Text</ButtonLightmode>
        <ButtonLightmode variant="outlineLeftIcon" leftIcon={<Plus className="w-4 h-4" />}>Text</ButtonLightmode>
        <ButtonLightmode variant="outlineRightIcon" rightIcon={<Plus className="w-4 h-4" />}>Text</ButtonLightmode>
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
        <ButtonLightmode variant="outlineTextOnly" disabled>Text</ButtonLightmode>
        <ButtonLightmode variant="outlineLeftIcon" leftIcon={<Plus className="w-4 h-4" />} disabled>Text</ButtonLightmode>
        <ButtonLightmode variant="outlineRightIcon" rightIcon={<Plus className="w-4 h-4" />} disabled>Text</ButtonLightmode>
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
