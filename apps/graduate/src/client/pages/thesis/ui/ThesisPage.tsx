import { useSearch } from '@tanstack/react-router';

import { Section } from '~/shared/ui';

import { ThesisCollapse } from './ThesisCollapse';

import { SubmissionButtons } from '~/client/pages/certification/ui/SubmissionButtons';
import * as styles from '~/client/shared/styles/SubmissionPage.css';

export default function ThesisPage() {
  const { type } = useSearch({ from: '/thesis' }) as {
    type: 'midreport' | 'finalreport';
  };

  return (
    <div className={styles.container}>
      <Section.Header subtitle='중간 보고서와 최종 보고서를 제출해주세요.'>
        졸업 논문 보고서 제출
      </Section.Header>
      <ThesisCollapse activeKey={type} />
      <SubmissionButtons />
    </div>
  );
}
