import { Link } from '@tanstack/react-router';
import { Timeline } from 'antd';
import { ArrowRight, Bell } from 'lucide-react';
import type { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';

import { DataTable, Section } from '~/shared/components';
import { ROUTE } from '~/shared/constants/route';

import WeekCalendar from './WeekCalendar';
import { timelineItems } from '../mock/schedule';
import { STATUS_TEXT, USER_STATUS } from '../model/userStatus';
import * as styles from '../styles/HomePage.css';

import { vars } from '~/vars.css';

export default function HomePage() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const userStatus = USER_STATUS.THESIS_FINALREPORT_SUBMITTED;
  const { title, description, button } = STATUS_TEXT[userStatus];

  const buttons = [
    {
      label: '공지사항 확인하기',
      href: ROUTE.NOTICE,
      icon: <Bell size={20} />,
    },
  ];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <section className={styles.mainSection}>
        <section className={styles.upperSection}>
          <section className={styles.header}>
            <div className={styles.headerTextWrapper}>
              <p className={styles.headerTitle}>{title}</p>
              <p className={styles.headerDescription}>
                {description.split('\n').map(line => (
                  <Fragment key={line}>
                    {line}
                    <br />
                  </Fragment>
                ))}
              </p>
            </div>

            <section className={styles.homeButtonSection}>
              <NavigateButton
                href={button.href}
                icon={<ArrowRight />}
                label={button.label}
              />

              {buttons.map(button => (
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
              <Timeline
                items={timelineItems}
                style={{ marginTop: vars.spacing.md }}
              />
            </Section>
          </section>
        </section>
        <div className={styles.noticeSection}>
          <Section>
            <Section.Header
              subtitle='졸업 관련 공지사항을 확인해주세요.'
              action={
                <Link to='/notices' className={styles.noticeAction}>
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
