import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/Input/Input-Basic';

const meta: Meta<typeof Input> = {
  title: 'components/Input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An Input is a user interface (UI) component designed for capturing data or information from the user.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['search', 'basic', 'dark'],
      description: 'Tipo de input: search (con iconos), basic (simple) o dark (tema oscuro)',
    },
    onLeftIconClick: { action: 'left icon clicked' },
    onRightIconClick: { action: 'right icon clicked' },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

// === STORIES CON ID PARA ACCESIBILIDAD ===

export const Text: Story = {
  args: {
    id: 'input-name',
    label: 'Name*',
    type: 'text',
    placeholder: 'Your name',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The "Name" Input is a specific instance of a text input component whose purpose is to capture the nominal identity of an entity, usually a person, but which could also refer to an organization, a product, etc.',
      },
    },
  },
};

export const Phone: Story = {
  args: {
    id: 'input-phone',
    label: 'Phone*',
    type: 'number',
    placeholder: 'Your phone',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This input is used to perform searches by clicking the icons located on its left and right.',
      },
    },
  },
};

export const Email: Story = {
  args: {
    id: 'input-email',
    label: 'Email*',
    type: 'email',
    placeholder: 'example@email.com',
  },
  parameters: {
    docs: {
      description: {
        story:
          'An Email Input is a user interface (UI) component specifically designed for capturing email addresses.',
      },
    },
  },
};

export const Password: Story = {
  args: {
    id: 'input-password',
    label: 'Password:',
    type: 'password',
    placeholder: '•••••••',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A Password Input is a user interface (UI) component specifically designed for entering sensitive information, such as passwords, security tokens, or any data that should remain hidden during typing.',
      },
    },
  },
};

export const ErrorInput: Story = {
  args: {
    id: 'input-error',
    label: 'Name:',
    type: 'text',
    error: 'Required field',
  },
};

export const InputSearch: Story = {
  args: {
    id: 'input-icon-actions',
    label: 'Search',
    placeholder: 'Search...',
    variant: 'search',
    onLeftIconClick: () => alert('Left Icon Clicked'),
    onRightIconClick: () => alert('Right Icon Clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'This input is used to perform searches by clicking the icons located on its left and right.',
      },
    },
  },
};
