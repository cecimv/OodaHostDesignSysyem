import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/InputEXAMPLE/Input';

const meta: Meta<typeof Input> = {
  title: 'example/Input',
  component: Input,
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
};

export const Phone: Story = {
  args: {
    id: 'input-phone',
    label: 'Phone*',
    type: 'number',
    placeholder: 'Your phone',
  },
};

export const Email: Story = {
  args: {
    id: 'input-email',
    label: 'Email*',
    type: 'email',
    placeholder: 'Your email',
  },
};

export const Password: Story = {
  args: {
    id: 'input-password',
    label: 'Password:',
    type: 'password',
    placeholder: '•••••••',
  },
};

export const WithError: Story = {
  args: {
    id: 'input-error',
    label: 'Name:',
    type: 'text',
    error: 'Campo obligatorio',
  },
};

export const Message: Story = {
  args: {
    id: 'input-message',
    variant: 'dark',
    label: 'Message (Optional)',
    placeholder: 'Message',
    isTextarea: true,
    rows: 4,
  },
};

// === NUEVAS STORIES ===

export const HiddenLabelAriaOnly: Story = {
  args: {
    id: 'input-hidden-label',
    label: 'Buscar productos',
    placeholder: 'Buscar sin label visible',
    variant: 'search',
    hideLabel: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con aria-label (sin label visible).',
      },
    },
  },
};

export const SearchWithIconActions: Story = {
  args: {
    id: 'input-icon-actions',
    label: 'Buscar',
    placeholder: 'Buscar...',
    variant: 'search',
    onLeftIconClick: () => alert('Icono izquierdo clicado'),
    onRightIconClick: () => alert('Icono derecho clicado'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de búsqueda con íconos clicables.',
      },
    },
  },
};
