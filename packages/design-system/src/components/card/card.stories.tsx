import type { Meta, StoryObj } from '@storybook/react';
import ListRow from '../list-row/list-row';
import List from '../list/list';
import Card from './card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
        <Card.Header
          title="공지사항"
          description="학부와 관련된 주용한 공지사항을 안내해드려요."
        />
        <Card.Content>
          <List>
            <ListRow
              contents={<span>2024년 ICT 학점연계 프로젝트 인턴십 모집</span>}
              right={<span>2024.03.27</span>}
            />
            <ListRow
              contents={
                <p>[SW중심대학] 싱가포르 시큐어코딩 개발프로젝트 참가자 모집</p>
              }
              right={<span>2024.02.15</span>}
            />
          </List>
        </Card.Content>
      </>
    ),
  },
};
