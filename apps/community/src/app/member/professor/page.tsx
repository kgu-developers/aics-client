import type { Metadata } from 'next';

import { PageHeader } from '~/components/page-header';
import { ProfessorCard } from '~/components/professor-card';

import * as styles from '~/app/member/professor/page.css';

import { PROFESSORS } from './mocks/professor';

export const metadata: Metadata = {
  title: '교수진 소개 - 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 소프트웨어경영대학 AI컴퓨터공학부 공식 홈페이지',
};

export default function ProfessorPage() {
  return (
    <section>
      <PageHeader
        title="교수진 소개"
        description="경기대학교 AI컴퓨터공학부의 교수진을 소개해요"
      />

      <div className={styles.professorListWrapper}>
        {PROFESSORS.map((professor) => (
          <ProfessorCard
            key={`professor-${professor.id}`}
            professor={professor}
          />
        ))}
      </div>
    </section>
  );
}
