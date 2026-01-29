import { message, Upload, UploadProps } from 'antd';
import { InboxIcon } from 'lucide-react';

import { useSubmitCertificate } from '../api/submitCertificate';

const { Dragger } = Upload;

export const FileUploadDragger = () => {
  const { mutateAsync: submitCertificate } = useSubmitCertificate();

  const customUploadRequest: UploadProps['customRequest'] = async options => {
    const { file, onSuccess, onError } = options;

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await submitCertificate(formData);

      onSuccess?.(response);
      message.success(
        `${(file as File).name} 파일이 성공적으로 업로드되었습니다.`,
      );
    } catch (error) {
      onError?.(error as Error);
      message.error(`${(file as File).name} 파일 업로드에 실패했습니다.`);
    }
  };

  const beforeUpload: UploadProps['beforeUpload'] = file => {
    const isPdf =
      file.type === 'application/pdf' ||
      file.name.toLowerCase().endsWith('.pdf');
    if (!isPdf) {
      alert(
        `${file.name}은(는) PDF 파일이 아닙니다. PDF 파일만 업로드할 수 있습니다.`,
      );
      return false;
    }
    return true;
  };

  const uploadProps: UploadProps = {
    name: 'file',
    accept: '.pdf',
    multiple: true,
    customRequest: customUploadRequest,
    beforeUpload,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...uploadProps}>
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
