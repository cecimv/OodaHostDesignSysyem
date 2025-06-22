import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Example/Input-Basic',
  component: Input,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const defaultInput: Story = {
  args: {
    label: 'InputText',
    type: 'text',
    placeholder: 'Text Input',
  },
  parameters: {
    docs: {
      description: {
        story: "Name.",
      },
    },
  },
};

export const inputNumber: Story = {
  args: {
    label: 'InputNumber',
    type: 'number',
    placeholder: 'Text input',
  },
  parameters: {
    docs: {
      description: {
        story: "Number.",
      },
    },
  },
};

export const Email: Story = {
  args: {
    label: 'Input',
    type: 'email',
    placeholder: 'example@correo.com',
  },
  parameters: {
    docs: {
      description: {
        story: "Email.",
      },
    },
  },
};

export const WithError: Story = {
  args: {
    label: 'Name:',
    type: 'text',
    error: 'Filed required',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      {/* Inputs básicos */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Inputs básicos</h3>
        <div className="flex items-end gap-4">
          <Input label="text" type="text" placeholder="Text Input" />
          <Input label="text" type="text" placeholder="Text Input" />
          <Input label="text" type="text" placeholder="Text Input" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Diferentes variaciones del componente Input disponibles.",
      },
    },
  },
};