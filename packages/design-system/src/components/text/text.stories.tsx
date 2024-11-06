import type { Meta, StoryObj } from '@storybook/react';
import Text from './text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    as: 'span',
    size: 'md',
    fontWeight: 'regular',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children:
      '소프트웨어 개발 능력을 갖춘 수요 지향적 소프트웨어 엔지니어 양성',
  },
};

export const Regular: Story = {
  args: {
    fontWeight: 'regular',
    children:
      '소프트웨어 개발 능력을 갖춘 수요 지향적 소프트웨어 엔지니어 양성',
  },
};

export const Semibold: Story = {
  args: {
    fontWeight: 'semibold',
    children:
      '소프트웨어 개발 능력을 갖춘 수요 지향적 소프트웨어 엔지니어 양성',
  },
};

export const Bold: Story = {
  args: {
    fontWeight: 'bold',
    children:
      '소프트웨어 개발 능력을 갖춘 수요 지향적 소프트웨어 엔지니어 양성',
  },
};
