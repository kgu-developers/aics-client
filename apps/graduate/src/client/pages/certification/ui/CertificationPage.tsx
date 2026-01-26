import { Section } from '~/shared/ui';
import * as styles from '~/client/shared/styles/SubmissionPage.css';

import { CertificationCollapse } from './CertificationCollapse';
import { SubmissionButtons } from './SubmissionButtons';

export default function CertificationPage() {
  return (
    <div className={styles.container}>
      <Section.Header subtitle='자격증 증빙 서류를 제출해주세요.'>
        자격증 증빙 서류 제출
      </Section.Header>
      <CertificationCollapse />
      <SubmissionButtons />
    </div>
  );
}
