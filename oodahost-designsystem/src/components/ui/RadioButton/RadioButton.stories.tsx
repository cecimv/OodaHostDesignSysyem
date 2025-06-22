import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Un botón de radio personalizado con estilos modernos usando Tailwind CSS v4.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");

    return (
      <div className="flex flex-col gap-4 p-4">
        <RadioButton
          label="Option 1"
          name="demo"
          value="option1"
          checked={selected === "option1"}
          onChange={setSelected}
        />
        <RadioButton
          label="Option 2"
          name="demo"
          value="option2"
          checked={selected === "option2"}
          onChange={setSelected}
        />
      </div>
    );
  },
};
