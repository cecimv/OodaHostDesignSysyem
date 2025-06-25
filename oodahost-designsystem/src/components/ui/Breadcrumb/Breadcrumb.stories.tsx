// src/components/ui/Breadcrumbs/Breadcrumbs.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumb'; // Asegúrate de que la ruta sea correcta

const defaultItems: BreadcrumbItem[] = [
  { label: 'Homepage', href: '#' },
  { label: 'Category', href: '#' },
  { label: 'Subcategory', href: '#' },
  { label: 'Product Details', href: '#' },
  { label: 'Current Page', href: '#' },
];

const truncatedItems: BreadcrumbItem[] = [
  { label: 'Homepage', href: '#' },
  { label: 'Target', href: '#' },
  { label: 'Tag', href: '#' },
  { label: 'Developer Settings', href: '#' },
  { label: 'Authority', href: '#' },
  { label: 'Current Deep Page', href: '#' },
];


const meta: Meta<typeof Breadcrumbs> = {
  title: 'components/BreadCrumb/Breadcrumbs', // Categoría en Storybook
  component: Breadcrumbs,
  
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
    },
    truncated: {
      control: 'boolean',
      description: 'If true, displays a truncated version with "..."',
    },
    separator: {
      control: 'text',
      description: 'Custom separator character (e.g., ">", "-")',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes for the container',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Breadcrumbs component displays a hierarchical navigation path indicating the current location within an application or website. It helps users understand where they are and allows easy navigation to previous levels or higher sections. It is especially useful in sites with deep structures or multiple categories.',
      },
    },
  },
};

export default meta;

export const Basic: StoryObj<typeof Breadcrumbs> = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The basic Breadcrumbs component displays the navigation path from the homepage to the current page, passing through intermediate categories. This component helps users understand the navigation hierarchy and easily return to previous sections with a single click.',
      },
    },
  },
  args: {
    items: defaultItems,
    truncated: false,
  },
};

export const Truncated: StoryObj<typeof Breadcrumbs> = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The Truncated Breadcrumbs component displays a simplified navigation path when the hierarchy is very deep. Instead of listing all intermediate pages, it shows the homepage, an ellipsis (...) indicating hidden levels, and the current page. This helps keep the layout clean and prevents the navigation bar from becoming overloaded, maintaining usability and clarity.',
      },
    },
  },
  args: {
    items: truncatedItems,
    truncated: true,
  },
};
