'use client';

import { MyInfoCard } from '~/components/my/my-info-card';

interface Props {
  data: {
    title: string;
    value: string;
  }[];
}

function MyInfoEditableProfileCard({ data }: Props) {
  const handleSave = (field: string, value: string) => {
    // TODO: 필요한 서버 API 호출 로직 추가
    console.log(`${field} 저장: ${value}`);
  };

  return (
    <MyInfoCard title="기본 정보" layout="singleColumn">
      {data.map((detail) => (
        <MyInfoCard.EditableField
          key={detail.title}
          title={detail.title}
          value={detail.value}
          onSave={(value) => handleSave(detail.title, value)}
        />
      ))}
    </MyInfoCard>
  );
}

export { MyInfoEditableProfileCard };
