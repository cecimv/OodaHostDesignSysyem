// src/components/ui/Shadows/index.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ShadowsOverview } from './Shadow'; // O desde ShadowComponents
import { ShadowCircle } from './Shadow';

const meta: Meta<typeof ShadowsOverview> = {
  title: 'components/Shadow/Shadows',
  component: ShadowsOverview,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The shadow property is used to apply a shadow around a component, helping to create a sense of depth and visual hierarchy. Shadows highlight interactive elements or visually separate them from the background. This property typically supports different levels or intensities such as sm, md, or lg, depending on the desired design.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShadowsOverview>;

export const DefaultShadows: Story = {
  name: 'Shadow',
  render: () => <ShadowsOverview />,
  parameters: {
    docs: {
      description: {
        story: 'This demonstration illustrates the various shadow sizes (shadow) supported by the system to visually prioritize elements. The sizes range from xs, which applies a very subtle and light shadow, to l, which creates a more pronounced and prominent shadow. This variety allows different levels of depth and emphasis to be given to components, enhancing visual perception and user experience.',
      },
    },
  },
};

export const ShadowXS: Story = {
  name: 'Shadow XS',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Drop Shadow XS applies a shadow with a 12-pixel blur, a very subtle black color at 10% opacity (rgba(46, 43, 43, 0.10)), and a vertical offset of 4 pixels (X: 0, Y: 4). This light shadow adds subtle depth without overwhelming the design.',
      },
    },
  },
  render: () => <ShadowCircle variant="xs" />,
};

export const ShadowS: Story = {
  name: 'Shadow S',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Drop Shadow S applies a shadow with a 16-pixel blur, a soft black color at 12% opacity (rgba(46, 43, 43, 0.12)), and a vertical offset of 4 pixels (X: 0, Y: 4). This shadow provides moderate depth that enhances visual separation without being too dominant.',
      },
    },
  },
  render: () => <ShadowCircle variant="s" />,
};

export const ShadowM: Story = {
  name: 'Shadow M',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Drop Shadow M applies a shadow with a 32-pixel blur, a black color at 16% opacity (rgba(46, 43, 43, 0.16)), and a vertical offset of 8 pixels (X: 0, Y: 8). This shadow provides significant depth that helps clearly highlight elements without losing subtlety.',
      },
    },
  },
  
  render: () => <ShadowCircle variant="m" />,
};

export const ShadowL: Story = {
  name: 'Shadow L',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Drop Shadow L applies a shadow with a 32-pixel blur, a black color at 16% opacity (rgba(46, 43, 43, 0.16)), and a vertical offset of 8 pixels (X: 0, Y: 8). This shadow creates a pronounced depth that helps highlight important elements with a sleek and well-defined effect.',
      },
    },
  },
  render: () => <ShadowCircle variant="l" />,
};