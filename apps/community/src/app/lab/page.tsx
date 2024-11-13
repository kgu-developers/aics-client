import { LabCard } from './components/LabCard';
import { LabHeader } from './components/LabHeader';
import { LABS } from './mocks/labs';
import * as styles from './page.css';

export default function Page() {
  return (
    <>
      <LabHeader />
      <section className={styles.cardContainer}>
        {LABS.map((lab) => (
          <LabCard key={`lab-${lab.id}`} lab={lab} />
        ))}
      </section>
    </>
  );
}
