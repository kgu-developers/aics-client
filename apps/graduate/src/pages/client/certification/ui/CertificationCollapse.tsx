import { Collapse, CollapseProps } from 'antd';
import type { CSSProperties } from 'react';

import * as styles from '~/shared/styles/SubmissionPage.css';

import { FileUploadDragger } from './FileUploadDragger';

export const CertificationCollapse = () => {
  const items: (
    panelStyle: CSSProperties,
  ) => CollapseProps['items'] = panelStyle => [
    {
      key: 'certification',
      label: '자격증 증빙 서류 제출',
      children: <FileUploadDragger />,
      style: panelStyle,
    },
  ];

  return (
    <Collapse
      size='large'
      bordered={false}
      items={items(styles.panelStyle)}
      defaultActiveKey={['certification']}
      className={styles.collapse}
    />
  );
};
