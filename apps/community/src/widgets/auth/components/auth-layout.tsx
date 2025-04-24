import Link from 'next/link'

import * as styles from '~/widgets/auth/components/auth-layout.css'

function AuthLayout({
  title,
  description,
  info,
  href,
  link,
  children,
}: {
  title: string
  description: string
  info: string
  href: string
  link: string
  children: React.ReactNode
}) {
  return (
    <>
      <div className={styles.headerWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
      <div className={styles.footerWrapper}>
        <p>{info}</p>
        <Link href={href} className={styles.link}>
          {link}
        </Link>
      </div>
    </>
  )
}

export { AuthLayout }
