import { Collapse, CollapseProps } from 'antd';
import type { CSSProperties } from 'react';

import { SCHEDULE } from '~/shared/constants/';

import { ThesisFileUploadDragger } from './ThesisFileUploadDragger';

import * as styles from '~/client/shared/styles/SubmissionPage.css';

interface ThesisCollapseProps {
  activeKey: 'midreport' | 'finalreport';
}

export const ThesisCollapse = ({ activeKey }: ThesisCollapseProps) => {
  const items: (
    panelStyle: CSSProperties,
  ) => CollapseProps['items'] = panelStyle => [
    {
      key: 'midreport',
      label: '중간 보고서 제출',
      children: <ThesisFileUploadDragger type={SCHEDULE.MIDTHESIS} />,
      style: panelStyle,
    },
    {
      key: 'finalreport',
      label: '최종 보고서 제출',
      children: <ThesisFileUploadDragger type={SCHEDULE.FINALTHESIS} />,
      style: panelStyle,
    },
  ];

  return (
    <Collapse
      size='large'
      bordered={false}
      items={items(styles.panelStyle)}
      defaultActiveKey={[activeKey]}
      className={styles.collapse}
    />
  );
};
