import { Link } from '@tanstack/react-router'
import { Button } from 'antd'
import { ArrowRight } from 'lucide-react'

import { DataTable, Section } from '~/shared/components'

import * as styles from '../styles/HomePage.css'

import { vars } from '~/vars.css'

export default function HomePage() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <Section>
        <section className={styles.header}>
          <p className={styles.headerDate}>{formattedDate}</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: vars.spacing.sm,
            }}
          >
            <p className={styles.headerText}>
              아직 졸업 요건 취득 방식을 지정하지 않았어요.
            </p>
            <p className={styles.headerDescription}>
              졸업 요건 취득 방식 신청 기간이에요.
              <br />
              요건 취득 방식을 정해 신청해주세요.
            </p>
          </div>

          <Button size="large" type="primary" className={styles.headerButton}>
            <p
              style={{
                textAlign: 'start',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              졸업 요건 취득 방식 지정하기
              <ArrowRight />
            </p>
          </Button>
        </section>
        <section className={styles.homeButtonSection}>
          <Button size="large" className={styles.homeButton}>
            <div>
              <p>졸업 요건 취득 방식 지정하기</p>
            </div>
          </Button>
          <Button size="large" className={styles.homeButton}>
            <div>
              <p>졸업 요건 취득 방식 지정하기</p>
            </div>
          </Button>
          <Button size="large" className={styles.homeButton}>
            <div>
              <p>졸업 요건 취득 방식 지정하기</p>
            </div>
          </Button>
        </section>
      </Section>
      <Section>
        <Section.Header
          subtitle="졸업 관련 공지사항을 확인해주세요."
          action={
            <Link to="/notices" className={styles.noticeAction}>
              <p>더보기</p>
            </Link>
          }
        >
          공지사항
        </Section.Header>
        <DataTable rows={[]} columns={[]} getRowId={() => ''} />
      </Section>
    </>
  )
}
