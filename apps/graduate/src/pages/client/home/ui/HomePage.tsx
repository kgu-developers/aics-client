import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';

import { DataTable, Section } from '~/shared/components';
import {
  GRADUATION_STATUS,
  GRADUATION_STATUS_TEXT,
  ROUTE,
  STATUS_TEXT,
} from '~/shared/constants';

import WeekCalendar from './WeekCalendar';
import {
  useFetchGraduationStatus,
  useFetchStatusText,
} from '../api/fetchStatusText';
import { BUTTONS } from '../model/button';
import * as styles from '../styles/HomePage.css';

import { ScheduleTimeLine } from '~/feature/schedule';
import { vars } from '~/vars.css';

export default function HomePage() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const graduationStatus = GRADUATION_STATUS.CERTIFICATE;
  const { data, isLoading } = useFetchStatusText(graduationStatus);
  const {
    data: graduationStatusData,
    isLoading: graduationStatusLoading,
    error: graduationStatusError,
  } = useFetchGraduationStatus();
  const { button } = STATUS_TEXT[graduationStatus];

  const renderText = () => {
    if (isLoading || !data)
      return (
        <>
          <p className={styles.headerTitle}>준비중</p>
          <p className={styles.headerDescription}>
            아직 졸업 요건 취득 일정이 지정되지 않았어요.
          </p>
        </>
      );

    return (
      <>
        <p className={styles.headerTitle}>{data.submissionType}</p>
        <p className={styles.headerDescription}>
          {data.content.split('\n').map(line => (
            <Fragment key={line}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
      </>
    );
  };

  const renderGraduationStatus = () => {
    if (graduationStatusLoading || !graduationStatusData)
      return <p>{graduationStatusError?.message}</p>;

    return <p>{graduationStatusData.status}</p>;
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <section className={styles.mainSection}>
        <section className={styles.upperSection}>
          <section className={styles.header}>
            <div className={styles.headerTextWrapper}>
              {renderGraduationStatus()}
              {renderText()}
            </div>
            <section className={styles.homeButtonSection}>
              <NavigateButton
                href={button.href}
                icon={<ArrowRight />}
                label={button.label}
              />

              {BUTTONS.map(button => (
                <NavigateButton
                  key={button.label}
                  href={button.href}
                  icon={button.icon}
                  label={button.label}
                />
              ))}
            </section>
          </section>
          <section className={styles.scheduleCard}>
            <Section>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: vars.spacing.sm,
                }}
              >
                <p className={styles.headerDate}>{formattedDate}</p>
                <p className={styles.headerText}> 졸업 요건 취득 일정</p>
              </div>
              <WeekCalendar />
              <ScheduleTimeLine />
            </Section>
          </section>
        </section>
        <div className={styles.noticeSection}>
          <Section>
            <Section.Header
              subtitle='졸업 관련 공지사항을 확인해주세요.'
              action={
                <Link to={ROUTE.NOTICE} className={styles.noticeAction}>
                  <p>더보기</p>
                </Link>
              }
            >
              공지사항
            </Section.Header>
            <DataTable rows={[]} columns={[]} getRowId={() => ''} />
          </Section>
        </div>
      </section>
    </div>
  );
}

const NavigateButton = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) => {
  return (
    <Link to={href} style={{ textDecoration: 'none' }}>
      <button type='button' className={styles.homeButton}>
        {icon}
        <p
          style={{
            textWrap: 'wrap',
            fontSize: vars.font.size.lg,
            textAlign: 'start',
            lineHeight: '1.5',
            fontVariationSettings: `'wght' ${vars.font.weight.medium}`,
          }}
        >
          {label.split('\n').map(line => (
            <Fragment key={line}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
      </button>
    </Link>
  );
};
