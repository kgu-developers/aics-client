import { PageHeader } from '~/components/page-header';
import { UserCard } from '~/components/users/user-card';
import { UserList } from '~/components/users/user-list';
import { getUser } from './remotes';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function UserPage() {
  const { data } = await getUser();

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
      <UserCard>
        {userDetails.map((detail) => (
          <UserList key={detail.title} title={detail.title}>
            <UserList.Row>{detail.value}</UserList.Row>
          </UserList>
        ))}
      </UserCard>
    </>
  );
}
