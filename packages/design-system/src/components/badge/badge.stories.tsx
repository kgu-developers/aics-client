import type { Meta, StoryObj } from '@storybook/react';
import Badge from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    color: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'SW중심대학',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'SW중심대학',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'SW중심대학',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'SW중심대학',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'SW중심대학',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    children: 'SW중심대학',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'SW중심대학',
  },
};
