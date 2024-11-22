import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: '학번을 입력해주세요',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Labeled: Story = {
  args: {
    label: '학번',
    message: '학번을 입력해주세요.',
  },
};

export const Disabled: Story = {
  args: {
    label: '학번',
    placeholder: '학번을 입력해주세요',
    disabled: true,
    message: '학번은 현재 입력이 불가능합니다',
  },
};
