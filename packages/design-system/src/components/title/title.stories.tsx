import type { Meta, StoryObj } from '@storybook/react';
import Title from './title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    as: 'h1',
    borderBottom: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: '컴퓨터공학전공',
  },
};

export const H1: Story = {
  args: {
    as: 'h1',
    children: '컴퓨터공학전공',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    children: '컴퓨터공학전공',
  },
};

export const borderBottom: Story = {
  args: {
    borderBottom: true,
    children: '컴퓨터공학전공',
  },
};
