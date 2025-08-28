import Image from 'next/image'

import * as styles from '~/features/member/components/professor-card.css'
import type { Professor } from '~/features/member/services/remote'
import AltImage from '~/shared/assets/images/alt.png'

function ProfessorCard({
  professor,
}: {
  professor: Professor
}) {
  return (
    <section className={styles.card}>
      <AvatarImage src={professor.img} name={professor.name} />
      <CardContent name={professor.name} type={professor.type} />
      <CardFooter
        contact={professor.contact}
        email={professor.email}
        officeLoc={professor.officeLoc}
      />
    </section>
  )
}

function AvatarImage({
  src,
  name,
}: {
  src: string | undefined
  name: string
}) {
  return (
    <Image
      src={src ?? AltImage}
      width={100}
      height={100}
      className={styles.avatarImage}
      alt={name}
    />
  )
}

function CardContent({
  name,
  type,
}: {
  name: string
  type: string
}) {
  return (
    <div className={styles.cardContent}>
      <h2 className={styles.professorName}>{name}</h2>
      <p className={styles.professorType}>{type}</p>
    </div>
  )
}

function CardFooter({
  contact,
  email,
  officeLoc,
}: {
  contact: string
  email: string
  officeLoc: string
}) {
  return (
    <div className={styles.cardFooter}>
      <p className={styles.professorContact}>{contact}</p>
      <p className={styles.professorEmail}>{email}</p>
      <p>{officeLoc}</p>
    </div>
  )
}

export { ProfessorCard }
