import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Button } from 'antd';

import * as style from '../styles/FilePreviewContent.css';

const pdfjsWorkerUrl = '/pdf.worker.min.js';

interface FilePreviewContentProps {
  fileUrl?: string;
  error: Error | null;
  onRetry?: () => void;
}

export default function FilePreviewContent({
  fileUrl,
  error,
  onRetry,
}: FilePreviewContentProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      zoomPlugin: {
        enableShortcuts: true,
      },
    },
  });

  if (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : '알 수 없는 오류가 발생했습니다.';
    return (
      <div className={style.error}>
        <div>{errorMessage}</div>
        {onRetry && (
          <Button type='primary' onClick={onRetry} style={{ marginTop: 16 }}>
            다시 시도
          </Button>
        )}
      </div>
    );
  }

  if (!fileUrl) {
    return <div className={style.empty}>파일이 없습니다.</div>;
  }

  return (
    <Worker workerUrl={pdfjsWorkerUrl}>
      <Viewer
        fileUrl={fileUrl}
        plugins={[defaultLayoutPluginInstance]}
        defaultScale={1.3}
        theme='dark'
      />
    </Worker>
  );
}
