import { Link } from '@tanstack/react-router';

import { DataTable, Section } from '~/shared/components';
import { ROUTE } from '~/shared/constants';

import * as styles from '../styles/HomePage.css';

export default function NoticeSection() {
  return (
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
  );
}
