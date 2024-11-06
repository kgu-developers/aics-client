import type { Meta, StoryObj } from '@storybook/react';
import ListRow from './list-row';

const meta: Meta<typeof ListRow> = {
  title: 'Components/ListRow',
  component: ListRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    left: <p>left</p>,
    right: <p>right</p>,
    contents: <p>contents</p>,
  },
};
