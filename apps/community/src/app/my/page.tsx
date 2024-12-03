import { MyInfoCard } from '~/components/my/my-info-card';
import { MyInfoField } from '~/components/my/my-info-field';
import { PageHeader } from '~/components/page-header';
import { getMyProfile } from './remotes';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function MyPage() {
  const { data } = await getMyProfile();
  console.log(data);

  const userDetails = [
    { title: '이름', value: data.name },
    { title: '학번', value: data.id },
    { title: '전화번호', value: data.phone },
    { title: '이메일', value: data.email },
    { title: '구분', value: data.role },
    { title: '전공', value: data.major },
  ];

  return (
    <>
      <PageHeader
        title="회원 정보"
        description="등록한 회원 정보를 확인할 수 있어요."
      />
      <MyInfoCard>
        {userDetails.map((detail) => (
          <MyInfoField
            key={detail.title}
            title={detail.title}
            value={detail.value}
          />
        ))}
      </MyInfoCard>
    </>
  );
}
