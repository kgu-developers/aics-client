'use client';

import { MyInfoCard } from '~/components/my/my-info-card';

interface MyInfoCardListProps {
  userDetails: { title: string; value: string }[];
  userEditableDetails: { title: string; value: string }[];
}

export function MyInfoCardList({
  userDetails,
  userEditableDetails,
}: MyInfoCardListProps) {
  const handleSave = (field: string, value: string) => {
    // TODO: 필요한 서버 API 호출 로직 추가
    console.log(`${field} 저장: ${value}`);
  };

  return (
    <>
      <MyInfoCard title="내 프로필" layout="default">
        {userDetails.map((detail) => (
          <MyInfoCard.Field
            key={detail.title}
            title={detail.title}
            value={detail.value}
          />
        ))}
      </MyInfoCard>

      <MyInfoCard title="기본 정보" layout="singleColumn">
        {userEditableDetails.map((detail) => (
          <MyInfoCard.EditableField
            key={detail.title}
            title={detail.title}
            value={detail.value}
            onSave={(value) => handleSave(detail.title, value)}
          />
        ))}
      </MyInfoCard>
    </>
  );
}
