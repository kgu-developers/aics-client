import * as styles from '~/features/auth/components/auth-header.css'

interface Props {
  title: string
  description: string
}

function AuthHeader({ title, description }: Props) {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export { AuthHeader }
