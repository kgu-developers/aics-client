import { Link } from '@tanstack/react-router';
import {
  Button,
  Collapse,
  CollapseProps,
  message,
  Upload,
  UploadProps,
} from 'antd';
import { InboxIcon } from 'lucide-react';
import type { CSSProperties } from 'react';

import { Section } from '~/shared/components';
import { ROUTE } from '~/shared/constants';

import * as styles from '~/pages/client/thesis/styles/ThesisPage.css';
import { vars } from '~/vars.css';

export default function CertificationPage() {
  const FileUpload = () => {
    return (
      <Dragger {...props}>
        <InboxIcon />
        <p className='ant-upload-text'>
          클릭 또는 드래그해 파일을 업로드해주세요.
        </p>
        <p className='ant-upload-hint'>
          단일 또는 여러 파일을 업로드할 수 있습니다. 회사 데이터 또는 금지된
          파일을 업로드하는 것은 금지되어 있습니다.
        </p>
      </Dragger>
    );
  };

  const items: (
    panelStyle: CSSProperties,
  ) => CollapseProps['items'] = panelStyle => [
    {
      key: 'certification',
      label: '자격증 증빙 서류 제출',
      children: <FileUpload />,
      style: panelStyle,
    },
  ];

  const panelStyle: React.CSSProperties = {
    marginBottom: vars.spacing.md,
    background: vars.colors.white,
    borderRadius: vars.radius.lg,
    border: 'none',
  };

  const { Dragger } = Upload;

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        width: '100%',
        maxWidth: '768px',
        margin: 'auto',
        gap: vars.spacing.xl,
      }}
    >
      <Section.Header subtitle='자격증 증빙 서류를 제출해주세요.'>
        자격증 증빙 서류 제출
      </Section.Header>
      <Collapse
        size='large'
        bordered={false}
        items={items(panelStyle)}
        defaultActiveKey={['certification']}
        className={styles.collapse}
      />
      <div style={{ display: 'flex', gap: vars.spacing.md, width: '100%' }}>
        <Link
          to={ROUTE.HOME}
          style={{
            width: '100%',
          }}
        >
          <Button size='large' type='primary' className={styles.button}>
            이전으로
          </Button>
        </Link>
        <Link
          to={ROUTE.HOME}
          style={{
            width: '100%',
          }}
        >
          <Button size='large' className={styles.button} type='primary'>
            제출하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
