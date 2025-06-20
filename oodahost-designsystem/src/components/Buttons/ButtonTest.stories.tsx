// src/components/ButtonTest.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonTest } from "./ButtonTest"; // 👈 Aquí ahora sí lo estás importando

const meta: Meta<typeof ButtonTest> = {
  title: "Example/ButtonFocusRing",
  component: ButtonTest,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ButtonTest>;

export const Default: Story = {
  render: () => <ButtonTest />,
};
