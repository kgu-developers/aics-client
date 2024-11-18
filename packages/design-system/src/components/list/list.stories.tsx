import type { Meta, StoryObj } from '@storybook/react';
import List from './list';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <>
        <li>first</li>
        <li>second</li>
        <li>third</li>
        <li>fourth</li>
      </>
    ),
  },
};
