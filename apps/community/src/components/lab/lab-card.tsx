import Image from 'next/image';
import Link from 'next/link';
import type { Lab } from '~/app/lab/remotes';
import * as styles from '~/components/lab/lab-card.css';

function LabCard({ lab }: { lab: Lab }) {
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={lab.img ?? 'https://placehold.co/128'}
        alt={`${lab.name} 이미지` || '연구실 이미지'}
        width={100}
        height={100}
        className={styles.image}
      />
      <div className={styles.divider} />
      <div className={styles.infoWrapper}>
        <h2 className={styles.title}>{lab.name}</h2>
        <p>지도교수: {lab.professor}</p>
        <p>연구실 위치: {lab.location}</p>
        <Link href={lab.site} target="_blank" className={styles.link}>
          홈페이지
        </Link>
      </div>
    </div>
  );
}

export { LabCard };
