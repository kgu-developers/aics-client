import { ClubCard } from '~/components/about/club/club-card';
import { ClubList } from '~/components/about/club/club-list';
import { PageHeader } from '~/components/page-header';
import { getClubs } from './remotes';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function ClubPage() {
  const { data } = await getClubs();

  return (
    <>
      <PageHeader
        title="동아리 소개"
        description="경기대학교 AI컴퓨터공학부의 연구실을 소개해요."
      />
      <ClubList>
        {data.map((club) => (
          <ClubCard key={`club-${club.name}`} {...club} />
        ))}
      </ClubList>
    </>
  );
}
