import { Link, useSearch } from '@tanstack/react-router';
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
import * as styles from '~/shared/styles/SubmissionPage.css';

export default function ThesisPage() {
  const { type } = useSearch({ from: '/_afterLogin/thesis' }) as {
    type: 'midreport' | 'finalreport';
  };

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
      key: 'midreport',
      label: '중간 보고서 제출',
      children: <FileUpload />,
      style: panelStyle,
    },
    {
      key: 'finalreport',
      label: '최종 보고서 제출',
      children: <FileUpload />,
      style: panelStyle,
    },
  ];

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
    <div className={styles.container}>
      <Section.Header subtitle='중간 보고서와 최종 보고서를 제출해주세요.'>
        졸업 논문 보고서 제출
      </Section.Header>
      <Collapse
        size='large'
        bordered={false}
        items={items(styles.panelStyle)}
        defaultActiveKey={[type]}
        className={styles.collapse}
      />
      <div className={styles.buttonContainer}>
        <Link to={ROUTE.HOME} className={styles.buttonWrapper}>
          <Button size='large' type='primary' className={styles.button}>
            이전으로
          </Button>
        </Link>
        <Link to={ROUTE.HOME} className={styles.buttonWrapper}>
          <Button size='large' className={styles.button} type='primary'>
            제출하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
