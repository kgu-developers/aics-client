import Image from 'next/image';
import Link from 'next/link';
import type { Lab } from '../mocks/labs';
import * as styles from './LabCard.css';

function LabCard({ lab }: { lab: Lab }) {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={lab.img || 'https://placehold.co/128'}
        alt={`${lab.name} 이미지` || '연구실 이미지'}
        width={100}
        height={100}
        className={styles.image}
      />
      <div className={styles.divider} />
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{lab.name}</h3>
        <p>연구실 위치: {lab.location}</p>
        <Link href={lab.site} target="_blank" className={styles.link}>
          홈페이지
        </Link>
      </div>
    </div>
  );
}

export { LabCard };
