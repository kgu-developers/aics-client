import type { Metadata } from 'next';

import { professorQueryOptions } from '~/apis/member/professor/queries';
import { Hydrate, getDehydratedQuery } from '~/utils/react-query';

import { ProfessorCard } from '~/components/member/professor/professor-card';
import { PageHeader } from '~/components/page-header';

import * as styles from '~/app/member/professor/page.css';

export const metadata: Metadata = {
  title: '교수진 소개 - 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 소프트웨어경영대학 AI컴퓨터공학부 공식 홈페이지',
};

//** TODO: for mocking */
export const dynamic = 'force-dynamic';

export default async function ProfessorPage() {
  const { queryKey, queryFn } = professorQueryOptions.all();
  const query = await getDehydratedQuery({ queryKey, queryFn });
  const { data } = query.state.data ?? {};

  return (
    <section>
      <PageHeader
        title="교수진 소개"
        description="경기대학교 AI컴퓨터공학부의 교수진을 소개해요"
      />

      <Hydrate state={{ query }}>
        <div className={styles.professorListWrapper}>
          {data?.map((professor) => (
            <ProfessorCard
              key={`professor-${professor.id}`}
              professor={professor}
            />
          ))}
        </div>
      </Hydrate>
    </section>
  );
}
