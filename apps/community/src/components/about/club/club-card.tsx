import Image from 'next/image';
import Link from 'next/link';
import * as style from './club-card.css';

interface Props {
  name: string;
  description: string;
  link?: string;
  image?: string;
}

function ClubCard({ image, name, description, link }: Props) {
  return (
    <div className={style.cardWrapper}>
      <Image
        className={style.cardImage}
        src={image ?? 'https://placehold.co/510x255.png'}
        width={510}
        height={255}
        alt={`${name} 동아리 사진`}
      />
      <div className={style.cardBodyWrapper}>
        <h3 className={style.cardTitle}>{name}</h3>
        <p>{description}</p>
        {link && (
          <p className={style.cardLinkWrapper}>
            홈페이지 -
            <Link href={link} target="_blank" className={style.cardHomeLink}>
              바로가기
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export { ClubCard };
