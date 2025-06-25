import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton/RadioButton",
  component: RadioButton,
  argTypes: {
    value: { description: "Unique value that identifies the Radio Button option", control: "text" },
    label: { description: "Text displayed next to the Radio Button", control: "text" },
    checked: { description: "Indicates whether the Radio Button is selected", control: "boolean" },
    onChange: { description: "Function called when selection changes"},
    disabled: { description: "Whether the Radio Button is disabled", control: "boolean", defaultValue: false },
    name: { description: "Name of the radio group", control: "text" },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Radio Button component allows the user to select a single option from a group of alternatives. It is useful when an exclusive choice is required, such as answering a single-choice question in a survey, selecting a product category, or choosing a user type during registration.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The default value in a Radio Button is the option that appears automatically selected when the component is first rendered. This is useful to guide the user toward a recommended choice or to ensure that an option is always selected, even if the user doesn't take explicit action.",
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState("option1");

    return (
      <div className="flex flex-col gap-3">
        <RadioButton
          name="group1"
          label="text"
          value="option1"
          checked={selected === "option1"}
          onChange={setSelected}
        />
        <RadioButton
          name="group1"
          label="text"
          value="option2"
          checked={selected === "option2"}
          onChange={setSelected}
        />
      </div>
    );
  },
};

export const CheckedRadio: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Checked indicates that a Radio Button is currently selected. This state reflects that the option has been either chosen by the user or preselected by the system. Only one Radio Button can be checked within the same group, ensuring an exclusive selection.",
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState("option4");

    return (
      <div className="flex flex-col gap-3">
        <RadioButton
          name="group2"
          label="text"
          value="option4"
          checked={selected === "option4"}
          onChange={setSelected}
        />
      </div>
    );
  },
};

export const UncheckedRadio: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Unchecked indicates that the Radio Button is not selected. It represents an available option within the group that hasn't been chosen by the user. In a group of radio buttons, all options except the selected one remain unchecked.",
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState("option1");

    return (
      <div className="flex flex-col gap-3">
        <RadioButton
          name="group3"
          label="text"
          value="option5"
          checked={selected === "option2"}
          onChange={setSelected}
        />
      </div>
    );
  },
};

export const DisabledRadio: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Disabled means the Radio Button is inactive and cannot be selected or changed by the user. It is used to display options that are currently unavailable due to system rules, user permissions, or specific form conditions.",
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState("option3");

    return (
      <div className="flex flex-col gap-3">
        <RadioButton
          name="group4"
          label="text"
          value="option6"
          checked={selected === "option3"}
          onChange={setSelected}
          disabled
        />
      </div>
    );
  },
};
