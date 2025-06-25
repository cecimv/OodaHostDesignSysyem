import type { Meta, StoryObj } from "@storybook/react";
import { IconButtonLightmode } from "./Icon-Button-Lightmode";
//import { Plus } from 'lucide-react';

const meta = {
    title: "Components/Button/Icon-Button-Lightmode",
    component: IconButtonLightmode,
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
            options: ["primaryIconButton", "outlineIconButton", "ghostIconButton"],
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
} satisfies Meta<typeof IconButtonLightmode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primaryIconButton: Story = {
    args: {
        children: "+",
        variant: "primaryIconButton",
        size: "md",
    },
    parameters: {
        docs: {
            description: {
                story: "This button indicates the main action within a section or interface. It is used to draw the user's attention to the most important action they can take, such as adding a new item.",
            },
        },
    },
};

export const outlineIconButton: Story = {
    args: {
        children: "+",
        variant: "outlineIconButton",
        size: "md",
    },
    parameters: {
        docs: {
            description: {
                story: "This button also represents an important action, but with less visual weight than the primary button, ideal when you want to offer an important alternative action without competing with the primary button.",
            },
        },
    },
};

export const ghostIconButton: Story = {
    args: {
        children: "+",
        variant: "ghostIconButton",
        size: "md",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the most discreet of the three buttons, used for secondary or less priority actions. It is used when you want to maintain a clean and minimalist design, without distracting the user too much.",
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
            <IconButtonLightmode size="sm" variant="primaryIconButton">+</IconButtonLightmode>
            <IconButtonLightmode size="md" variant="primaryIconButton">+</IconButtonLightmode>
            <IconButtonLightmode size="lg" variant="primaryIconButton">+</IconButtonLightmode>
        </div>
        
        {/* Botones con icono izquierdo */}
        <div className="flex items-center gap-4">
            <IconButtonLightmode size="sm" variant="outlineIconButton">+</IconButtonLightmode>           
            <IconButtonLightmode size="md" variant="outlineIconButton">+</IconButtonLightmode>
            <IconButtonLightmode size="lg" variant="outlineIconButton">+</IconButtonLightmode>
            
        </div>
        
        {/* Botones con icono derecho */}
        <div className="flex items-center gap-4">
            <IconButtonLightmode size="sm" variant="ghostIconButton">+</IconButtonLightmode>
            <IconButtonLightmode size="md" variant="ghostIconButton">+</IconButtonLightmode>
            <IconButtonLightmode size="lg" variant="ghostIconButton">+</IconButtonLightmode>
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
        <IconButtonLightmode variant="primaryIconButton">+</IconButtonLightmode>
        <IconButtonLightmode variant="outlineIconButton">+</IconButtonLightmode>
        <IconButtonLightmode variant="ghostIconButton">+</IconButtonLightmode>
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
        <IconButtonLightmode variant="primaryIconButton" disabled>+</IconButtonLightmode>
        <IconButtonLightmode variant="outlineIconButton" disabled>+</IconButtonLightmode>
        <IconButtonLightmode variant="ghostIconButton" disabled>+</IconButtonLightmode>
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
