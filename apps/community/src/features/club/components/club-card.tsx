import Image from 'next/image'
import Link from 'next/link'

import * as style from '~/features/club/components/club-card.css'

interface Props {
  name: string
  description: string
  site?: string
  image?: string
}

function ClubCard({ image, name, description, site }: Props) {
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
        <h2 className={style.cardTitle}>{name}</h2>
        <p>{description}</p>
        {site && (
          <p className={style.cardLinkWrapper}>
            홈페이지 -
            <Link href={site} target="_blank" className={style.cardHomeLink}>
              바로가기
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}

export { ClubCard }
