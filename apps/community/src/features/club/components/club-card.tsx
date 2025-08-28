import Image from 'next/image'
import Link from 'next/link'

import * as style from '~/features/club/components/club-card.css'
import type { Club } from '~/features/club/services/remote'

function ClubCard({ image, name, description, site }: Club) {
  return (
    <section className={style.cardWrapper}>
      <AvartarImage src={image} name={name} />
      <CardContent name={name} description={description} site={site} />
    </section>
  )
}

function AvartarImage({
  src,
  name,
}: {
  src: string | undefined
  name: string
}) {
  return (
    <Image
      className={style.cardImage}
      src={src ?? 'https://placehold.co/510x255.png'}
      width={510}
      height={255}
      alt={`${name} 동아리 사진`}
    />
  )
}

function CardContent({
  name,
  description,
  site,
}: {
  name: string
  description: string
  site?: string
}) {
  return (
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
  )
}

export { ClubCard }
