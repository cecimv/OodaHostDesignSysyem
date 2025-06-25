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
    id: {
      control: 'text',
      description: 'Unique identifier for the textarea.',
      defaultValue: 'textarea-text',
    },
    label: {
      control: 'text',
      description: 'Label for the textarea.',
    },
    placeholder: {
      control: 'text',
      description: 'Text shown inside the textarea when empty.',
      defaultValue: 'Textarea',
    },
    rows: {
      control: 'number',
      description: 'Number of visible rows in the textarea.',
      defaultValue: 4,
    },
    error: {
      control: 'text',
      description: 'Error message shown below the textarea.',
    },
    hideLabel: {
      control: 'boolean',
      description: 'Hides the visible label but keeps it accessible via aria-label.',
      defaultValue: false,
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of allowed characters.',
      defaultValue: 1000,
    },
    showCharCount: {
      control: 'boolean',
      description: 'Shows the character count below the textarea.',
      defaultValue: true,
    },
    onChange: {
      action: 'onChange',
      description: 'Function called when the textarea content changes.',
    },
    value: {
      control: 'text',
      description: 'Controlled value of the textarea.',
    },
    defaultValue: {
      control: 'text',
      description: 'Initial uncontrolled value of the textarea.',
      defaultValue: '',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea, preventing user interaction.',
      defaultValue: false,
    },
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
    parameters: {
      docs: {
        description: {
          story: 'The disabled state in a TextArea is used to indicate that the field is temporarily unavailable for user interaction.',
        },
      },
    },
};

