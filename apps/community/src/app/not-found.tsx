'use client'

import Image from 'next/image'

import { Button } from '@aics-client/design-system'
import { useRouter } from 'next/navigation'
import * as styles from '~/app/not-found.css'
import logo from '~/shared/assets/svgs/kgu-logo.svg'

export default function NotFound() {
  const router = useRouter()

  return (
    <section className={styles.container}>
      <Image className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.text}>페이지를 찾을 수 없습니다.</h1>
      <Button color="black" onClick={() => router.back()}>
        이전으로 돌아가기
      </Button>
    </section>
  )
}
