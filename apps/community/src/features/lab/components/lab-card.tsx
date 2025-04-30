import Image from 'next/image'
import Link from 'next/link'

import * as styles from '~/features/lab/components/lab-card.css'
import type { Lab } from '~/features/lab/services/remote'

function LabCard({ lab }: { lab: Lab }) {
  return (
    <section className={styles.cardWrapper}>
      <AvatarImage src={lab.file?.physicalPath} name={lab.name} />
      <CardContent
        name={lab.name}
        advisor={lab.advisor}
        loc={lab.loc}
        site={lab.site}
      />
    </section>
  )
}

function AvatarImage({ src, name }: { src: string | undefined; name: string }) {
  return (
    <Image
      src={src ?? 'https://placehold.co/128'}
      alt={`${name}` || '연구실 이미지'}
      width={100}
      height={100}
      className={styles.image}
    />
  )
}

function CardContent({
  name,
  advisor,
  loc,
  site,
}: { name: string; advisor: string; loc: string; site: string }) {
  return (
    <>
      <div className={styles.divider} />
      <div className={styles.infoWrapper}>
        <h2 className={styles.title}>{name}</h2>
        <p>지도교수: {advisor}</p>
        <p>연구실 위치: {loc}</p>
        <Link href={site} target="_blank" className={styles.link}>
          홈페이지
        </Link>
      </div>
    </>
  )
}

export { LabCard }
