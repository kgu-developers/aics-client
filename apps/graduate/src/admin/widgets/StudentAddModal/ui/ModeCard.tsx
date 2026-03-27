import { Card, Typography, theme } from 'antd';

import type { MODE_OPTIONS } from '../model/constants';

type ModeOption = (typeof MODE_OPTIONS)[number];

type Props = {
  option: ModeOption;
  isActive: boolean;
  onSelect: () => void;
};

export function ModeCard({ option, isActive, onSelect }: Props) {
  const { token } = theme.useToken();

  return (
    <Card
      size='small'
      onClick={onSelect}
      style={{
        cursor: 'pointer',
        background: isActive
          ? token.colorBgContainer
          : token.colorFillQuaternary,
        borderColor: isActive ? token.colorPrimary : token.colorBorderSecondary,
      }}
      styles={{ body: { padding: 16 } }}
    >
      <Typography.Title level={5} style={{ margin: 0 }}>
        {option.title}
      </Typography.Title>
      <Typography.Text type='secondary'>{option.description}</Typography.Text>
    </Card>
  );
}
