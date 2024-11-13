import * as styles from '~/app/lab/page.css';
import { LabCard } from '~/components/lab-card';
import { PageHeader } from '~/components/page-header';
import { LABS } from '~/mocks/labs';

export default function LabPage() {
  return (
    <>
      <PageHeader
        title="연구실 소개"
        description="경기대학교 AI컴퓨터공학부의 다양한 연구실을 소개해요."
      />
      <section className={styles.cardContainer}>
        {LABS.map((lab) => (
          <LabCard key={`lab-${lab.id}`} lab={lab} />
        ))}
      </section>
    </>
  );
}
