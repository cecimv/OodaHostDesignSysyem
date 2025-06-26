import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Pagination, { PaginationProps } from './Pagination';
//import { action } from '@storybook/addon-actions';

const meta: Meta<PaginationProps> = {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  argTypes: {
    onPageChange: { description: "Function called when the page changes; receives the selected page number.", action: "page changed", },
    onItemsPerPageChange: { description: "Function called when the number of items per page changes; receives the new value.", action: "items per page changed", },
    currentPage: { description: "Number of the currently selected page.", control: { type: "number", min: 1 }, },
    itemsPerPage: { description: "Number of items displayed per page.", control: { type: "number", min: 1, step: 10 }, },
    totalItems: { description: "Total number of items in the paginated collection or list.", control: { type: "number", min: 0 }, },
    totalPages: { description: "Total number of available pages.", control: { type: "number", min: 1 }, },
    variant: { description: "Type of pagination to display; can be 'basic', 'simple', or 'list'.", control: { type: "radio" }, options: ["simple", "basic", "list"], defaultValue: "basic", },
    showGoTo: { description: "Whether to show a field to jump directly to a specific page.", control: { type: "boolean" }, defaultValue: false, },
    className: { description: "Additional CSS class for customizing the component styles.", control: { type: "text" }, },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Pagination component allows dividing large amounts of content into smaller, manageable pages. It facilitates navigation between different pages of results or items, providing controls to go forward, backward, and select specific pages. It is especially useful for long lists, search results, or tables with many records.',
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Simple: StoryObj<PaginationProps> = {
  args: {
    variant: 'simple',
    currentPage: 1,
    totalPages: 124,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The Pagination (simple) component displays only the essential navigation controls, such as next and previous buttons. It is ideal for a cleaner, more minimal design, or when the total number of pages is not important for the user.',
      },
    },
  },
  render: (args) => {
    const [page, setPage] = React.useState(args.currentPage);
    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={(newPage) => {
          setPage(newPage);
          args.onPageChange?.(newPage);
        }}
      />
    );
  },
};

export const Basic: StoryObj<PaginationProps> = {
  args: {
    variant: 'basic',
    currentPage: 2,
    totalPages: 5,
    itemsPerPage: 10,
    totalItems: 85,
    showGoTo: true,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The Pagination (basic) component displays a full navigation bar with page numbers, next and previous buttons, and optionally a field to jump to a specific page. It is ideal when giving the user more control over navigation in long lists or large sets of data.',
      },
    },
  },
  render: (args) => {
    const [page, setPage] = React.useState(args.currentPage);
    const [itemsPerPage, setItemsPerPage] = React.useState(args.itemsPerPage ?? 10);

    return (
      <Pagination
        {...args}
        currentPage={page}
        itemsPerPage={itemsPerPage}
        onPageChange={(newPage) => {
          setPage(newPage);
          args.onPageChange?.(newPage);
        }}
        onItemsPerPageChange={(newItemsPerPage) => {
          setItemsPerPage(newItemsPerPage);
          args.onItemsPerPageChange?.(newItemsPerPage);
        }}
      />
    );
  },
};


export const List: StoryObj<PaginationProps> = {
  args: {
    variant: 'list',
    currentPage: 2,
    totalPages: 5,
    itemsPerPage: 10,
    totalItems: 85,
    showGoTo: true,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'The Pagination (list) component displays pages as a vertical or horizontal list, allowing users to directly select a page from a visible set of options. This variant is useful when more detailed or accessible navigation is desired, especially in interfaces with enough space to show multiple pages explicitly.',
      },
    },
  },
  render: (args) => {
    const [page, setPage] = React.useState(args.currentPage);
    const [itemsPerPage, setItemsPerPage] = React.useState(args.itemsPerPage ?? 10);

    return (
      <Pagination
        {...args}
        currentPage={page}
        itemsPerPage={itemsPerPage}
        onPageChange={(newPage) => {
          setPage(newPage);
          args.onPageChange?.(newPage);
        }}
        onItemsPerPageChange={(newItemsPerPage) => {
          setItemsPerPage(newItemsPerPage);
          args.onItemsPerPageChange?.(newItemsPerPage);
        }}
      />
    );
  },
};
