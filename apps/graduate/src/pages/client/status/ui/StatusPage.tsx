import { Steps } from 'antd';

import { Section } from '~/shared/components';

import * as styles from '../styles/StatusPage.css';

export default function StatusPage() {
  return (
    <div className={styles.container}>
      <Section.Header subtitle='현재 졸업 요건 취득 절차를 확인할 수 있어요.'>
        내 상태
      </Section.Header>
      <Steps
        direction='vertical'
        current={1}
        items={[
          {
            title: '대체 신청',
            description:
              '자격증 제출 혹은 졸업 논문 보고서를 통해 신청할 수 있어요',
          },
          {
            title: '담당 교수 배정',
            description:
              '담당 교수 배정이 완료되면 졸업 논문 보고서 제출 혹은 자격증 증빙 서류 제출을 할 수 있어요.',
          },
          {
            title: '중간 보고서 제출',
            description: '중간 보고서 초안 검토 완료, 수정본 제출 대기',
          },
          {
            title: '최종 보고서 제출',
            description: '최종 보고서 목차 확정, 본문 작성 중',
          },
          {
            title: '문서 제출 완료 및 승인 대기',
            description: '문서 제출이 완료되면 승인 대기 중이에요.',
          },
          {
            title: '졸업 요건 취득',
            description: '제출이 확인되면 졸업이 승인돼요.',
          },
        ]}
      />
    </div>
  );
}
