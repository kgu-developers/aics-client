import { Collapse, CollapseProps } from 'antd';
import type { CSSProperties } from 'react';

import { FileUploadDragger } from './FileUploadDragger';

import * as styles from '~/client/shared/styles/SubmissionPage.css';

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
      bordered={true}
      items={items(styles.panelStyle)}
      defaultActiveKey={['certification']}
      className={styles.collapse}
    />
  );
};
