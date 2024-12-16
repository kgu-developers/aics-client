import { clubQueryOptions } from '~/apis/about/club/queries';
import { Hydrate, getDehydratedQuery } from '~/utils/react-query';

import { ClubCard } from '~/components/about/club/club-card';
import { ClubList } from '~/components/about/club/club-list';
import { PageHeader } from '~/components/page-header';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function ClubPage() {
  const { queryKey, queryFn } = clubQueryOptions.all();
  const query = await getDehydratedQuery({ queryKey, queryFn });
  const { data } = query.state.data ?? {};

  return (
    <>
      <PageHeader
        title="동아리 소개"
        description="경기대학교 AI컴퓨터공학부의 연구실을 소개해요."
      />
      <Hydrate state={{ query }}>
        <ClubList>
          {data?.map((club) => (
            <ClubCard key={`club-${club.name}`} {...club} />
          ))}
        </ClubList>
      </Hydrate>
    </>
  );
}
