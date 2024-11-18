import type { Meta, StoryObj } from '@storybook/react';
import Spacing from './spacing';

const meta: Meta<typeof Spacing> = {
  title: 'Components/Spacing',
  component: Spacing,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
  decorators: [
    (Story) => (
      <div>
        <div>Component1</div>
        <Story />
        <div>Component2</div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
  },
};
