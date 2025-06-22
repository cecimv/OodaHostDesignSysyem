import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '@/components/ui/TextArea/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'components/TextArea/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A TextArea is a component designed for capturing multiple lines of text from the user.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    label: { description: 'Label for the textarea' },
    error: { description: 'Error message shown below the textarea' },
    hideLabel: { control: 'boolean', description: 'Hides the visible label (accessible via aria-label)' },
  },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Textarea: Story = {
  args: {
    id: 'textarea-text',
    label: '',
    placeholder: 'Textarea',
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic example of a TextArea used to capture a user message.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    id: 'textarea-error',
    label: '',
    placeholder: 'Textarea',
    error: 'This field is required',
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea showing a validation error message below.',
      },
    },
  },
};

export const Disabled: Story = {
    args: {
        id: 'textarea-disabled',
        label: '',
        placeholder: 'Textarea',
        rows: 4,
        maxLength: 1000,
        showCharCount: true,
        disabled: true,
    },
};