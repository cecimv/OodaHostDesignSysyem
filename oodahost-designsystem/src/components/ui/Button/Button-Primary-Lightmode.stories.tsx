import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLightmode } from "@/components/ui/Button/Button-Lightmode";
import { Plus } from 'lucide-react';

const meta = {
    title: "Components/Button/Button-Primary-Lightmode",
    component: ButtonLightmode,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "A customizable button component built with Tailwind CSS v4 and Framer Motion animations. Features hover animations, focus states, and intelligent icon sizing.",
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
                defaultValue: { summary: "primaryTextOnly" },
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
        leftIcon: {
            description: "Icon element to display on the left side",
            table: {
                type: { summary: "React.ReactNode" },
            },
        },
        rightIcon: {
            description: "Icon element to display on the right side",
            table: {
                type: { summary: "React.ReactNode" },
            },
        },
    },
} satisfies Meta<typeof ButtonLightmode>;

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
        children: "Text",
        variant: "primaryLeftIcon",
        size: "md",
        leftIcon: <Plus />,
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
        children: "Text",
        variant: "primaryRightIcon",
        size: "md",
        rightIcon: <Plus />,
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
                <ButtonLightmode size="sm" variant="primaryTextOnly">
                    Text
                </ButtonLightmode>
                <ButtonLightmode size="md" variant="primaryTextOnly">
                    Text
                </ButtonLightmode>
                <ButtonLightmode size="lg" variant="primaryTextOnly">
                    Text
                </ButtonLightmode>
            </div>
            
            {/* Botones con icono izquierdo - los iconos se escalan automáticamente */}
            <div className="flex items-center gap-4">
                <ButtonLightmode size="sm" variant="primaryLeftIcon" leftIcon={<Plus />}>
                    Text
                </ButtonLightmode>
                <ButtonLightmode size="md" variant="primaryLeftIcon" leftIcon={<Plus />}>
                    Text
                </ButtonLightmode>
                <ButtonLightmode size="lg" variant="primaryLeftIcon" leftIcon={<Plus />}>
                    Text
                </ButtonLightmode>
            </div>
            
            {/* Botones con icono derecho - los iconos se escalan automáticamente */}
            <div className="flex items-center gap-4">
                <ButtonLightmode size="sm" variant="primaryRightIcon" rightIcon={<Plus />}>
                    Text
                </ButtonLightmode>
                <ButtonLightmode size="md" variant="primaryRightIcon" rightIcon={<Plus />}>
                    Text
                </ButtonLightmode>
                <ButtonLightmode size="lg" variant="primaryRightIcon" rightIcon={<Plus />}>
                    Text
                </ButtonLightmode>
            </div>
        </div> 
    ),
    parameters: {
        docs: {
            description: {
                story: "Demonstration of all available button sizes. Notice how the icons automatically scale with the button size.",
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
            <ButtonLightmode variant="primaryTextOnly">Text</ButtonLightmode>
            <ButtonLightmode variant="primaryLeftIcon" leftIcon={<Plus />}>Text</ButtonLightmode>
            <ButtonLightmode variant="primaryRightIcon" rightIcon={<Plus />}>Text</ButtonLightmode>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Demonstration of all available primary button variants.",
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
            <ButtonLightmode variant="primaryTextOnly" disabled>Text</ButtonLightmode>
            <ButtonLightmode variant="primaryLeftIcon" leftIcon={<Plus />} disabled>Text</ButtonLightmode>
            <ButtonLightmode variant="primaryRightIcon" rightIcon={<Plus />} disabled>Text</ButtonLightmode>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Demonstration of disabled states for all primary button variants.",
            },
        },
    },
};

// Nueva historia para mostrar botones solo con iconos
export const IconOnly: Story = {
    args: {
        children: "Button",
    },
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <ButtonLightmode 
                variant="primaryLeftIcon" 
                leftIcon={<Plus />}
                className="!px-3"
                title="Add item"
                size="sm"
            > </ButtonLightmode>
            <ButtonLightmode 
                variant="primaryLeftIcon" 
                leftIcon={<Plus />}
                className="!px-3"
                title="Add item"
                size="md"
                > </ButtonLightmode>
            <ButtonLightmode 
                variant="primaryLeftIcon" 
                leftIcon={<Plus />}
                className="!px-3"
                title="Add item"
                size="lg"
            > </ButtonLightmode>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Primary buttons with only icons, useful for compact interfaces. Remember to include a title attribute for accessibility.",
            },
        },
    },
};