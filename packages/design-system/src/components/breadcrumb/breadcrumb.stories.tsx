import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from './breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
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
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href='/'>홈</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href='/'>
              <Breadcrumb.Page>소개</Breadcrumb.Page>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>동아리</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </>
    ),
  },
};
