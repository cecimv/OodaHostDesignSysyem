import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/Input/Input';
import React from 'react';

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
    id: {
      control: 'text',
      description: 'Unique identifier for the input.',
      defaultValue: 'input-name',
    },
    label: {
      control: 'text',
      description: 'Label for the input, describing its purpose.',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'search', 'basic', 'dark', 'number', 'email', 'password'],
      description: 'Input type: text, search (with icons) or basic (simple).',
      defaultValue: 'text',
    },
    placeholder: {
      control: 'text',
      description: 'Text shown inside the input when empty to guide the user.',
      defaultValue: 'Text input',
    },
    error: {
      control: 'text',
      description: 'Error message shown below the input when validation fails.',
    },
    variant: {
      control: { type: 'select' },
      options: ['search', 'basic'],
      description: 'Visual variant of the input.',
      defaultValue: 'basic',
    },
    isPressed: {
      control: 'boolean',
      description: 'Indicates if an internal button (e.g., on an icon) is pressed.',
    },
    onLeftIconClick: {
      action: 'onLeftIconClick',
      description: 'Function triggered when clicking the left icon.',
    },
    onRightIconClick: {
      action: 'onRightIconClick',
      description: 'Function triggered when clicking the right icon.',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show or hide the inputs clear button.',
      defaultValue: true,
    },
    hideLabel: {
      control: 'boolean',
      description: 'Show or hide the inputs label.',
      defaultValue: false,
    },
    onChange: {
      action: 'onChange',
      description: 'Function called when the input value changes.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

const withState = (args: any) => {
  const [value, setValue] = React.useState('');
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange?.(e);
      }}
    />
  );
};

/**************************************/
/*Storie de prueba*/
export const TextSimple: Story = (args: React.ComponentProps<typeof Input>) => <Input {...args} />;
TextSimple.args = {
  id: 'input-name',
  label: ' ',
  type: 'text',
  placeholder: 'Text',
};

export const TextWithState: Story = {
  render: withState,
  args: TextSimple.args,
};

/**************************************/
export const Text: Story = {
  render: withState,
  args: {
    id: 'input-name',
    label: ' ',
    type: 'text',
    placeholder: 'Text',
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

/*export const Phone: Story = {
  render: withState,
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
};*/
/*
export const Email: Story = {
  render: withState,
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
*/
/*export const Password: Story = {
  render: withState,
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
*/
export const ErrorInput: Story = {
  render: withState,
  args: {
    id: 'input-error',
    label: ' ',
    type: 'text',
    placeholder: 'text',
    error: 'Required field',
  },
};

export const InputSearch: Story = {
  render: withState,
  args: {
    id: 'input-icon-actions',
    label: ' ',
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

export const InputSearchError: Story = {
  render: withState,
  args: {
    id: 'input-icon-actions',
    label: ' ',
    placeholder: 'Search...',
    variant: 'search',
    error: 'Required field',
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


export const NumberInput: Story = {
  render: withState,
  args: {
    id: 'input-number',
    label: '',
    type: 'number',
    placeholder: '',
    min: 0,
    max: 120,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This numeric input is designed for entering whole numbers, such as age, quantity, or other numeric values. It restricts the range between 0 and 120.',
      },
    },
  },
};

export const InputNumberError: Story = {
  render: withState,
  args: {
    id: 'input-numberE',
    label: '',
    type: 'number',
    placeholder: '',
    min: 0,
    max: 120,
    error: 'Required field',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This numeric input is designed for entering whole numbers, such as age, quantity, or other numeric values. It restricts the range between 0 and 120.',
      },
    },
  },
};


