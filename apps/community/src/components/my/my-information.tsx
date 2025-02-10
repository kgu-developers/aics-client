'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { MY_PROFILE_QUERY_OPTIONS } from '~/apis/my/queries';

import { MyInfoEditableProfileCard } from './my-info-editable-profile-card';
import { MyInfoProfileCard } from './my-info-profile-card';

function MyInformation() {
  const { data } = useSuspenseQuery(MY_PROFILE_QUERY_OPTIONS.ALL());
  const userDetails = [
    { title: '이름', value: data.name },
    { title: '학번', value: data.id },
    { title: '구분', value: data.role },
    { title: '전공', value: data.major },
  ];

  const userEditableDetails = [
    { title: '전화번호', value: data.phone },
    { title: '이메일', value: data.email },
  ];
  return (
    <>
      <MyInfoProfileCard data={userDetails} />
      <MyInfoEditableProfileCard data={userEditableDetails} />
    </>
  );
}

export { MyInformation };
