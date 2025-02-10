'use client';

import { MyInfoCard } from '~/components/my/my-info-card';
import { useEditProfileMutation } from '~/hooks/use-edit-profile-mutation';

interface Props {
  data: {
    title: string;
    value: string;
  }[];
}

function MyInfoEditableProfileCard({ data }: Props) {
  const { mutate: editProfile } = useEditProfileMutation();

  const updatedData = {
    phone: data.find((item) => item.title === '전화번호')?.value ?? '',
    email: data.find((item) => item.title === '이메일')?.value ?? '',
  };

  const handleSave = (field: string, value: string) => {
    if (field === '전화번호') {
      updatedData.phone = value;
    } else if (field === '이메일') {
      updatedData.email = value;
    }

    editProfile(updatedData);
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
