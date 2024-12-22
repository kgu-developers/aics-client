import { MyInfoEditableProfileCard } from '~/components/my/my-info-editable-profile-card';
import { MyInfoProfileCard } from '~/components/my/my-info-profile-card';
import { PageHeader } from '~/components/page-header';
import { getMyProfile } from './remotes';

export default async function MyPage() {
  const { data } = await getMyProfile();

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
      <PageHeader
        title="회원 정보"
        description="등록한 회원 정보를 확인할 수 있어요."
      />
      <MyInfoProfileCard data={userDetails} />
      <MyInfoEditableProfileCard data={userEditableDetails} />
    </>
  );
}
