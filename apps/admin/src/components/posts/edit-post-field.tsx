import { Editor } from '@aics-client/tiptap';
import { Button, Checkbox, Form, Input, Radio, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import { UploadIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import type { PostDetailResponse } from '~/apis/community/requests';

function FormItemWrapper({
  label,
  children,
}: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl font-semibold">{label}</span>
      {children}
    </div>
  );
}

function EditPostField({ post }: { post?: PostDetailResponse }) {
  const [form] = Form.useForm();
  const initialValues = post
    ? {
        title: post.title,
        category: post.category,
        isPinned: post.isPinned || false,
        upload: post.file,
        content: post.content,
      }
    : {};

  const normFile = (e: UploadChangeParam | UploadChangeParam['fileList']) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };

  const handleSubmit = (values: PostDetailResponse) => {
    console.log(values); //TODO: api 완성 후 연결
  };

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onValuesChange={(value) => {
        console.log(value); //TODO: 추후 삭제
      }}
      onFinish={handleSubmit}
      className="flex flex-col gap-5"
    >
      <FormItemWrapper label="제목">
        <Form.Item name="title">
          <Input placeholder="제목을 입력하세요" size="large" />
        </Form.Item>
      </FormItemWrapper>

      <FormItemWrapper label="카테고리">
        <Form.Item name="category">
          <Radio.Group>
            <Radio value="공지사항">공지사항</Radio>
            <Radio value="학과 소식">학부소식</Radio>
          </Radio.Group>
        </Form.Item>
      </FormItemWrapper>

      <FormItemWrapper label="게시글 고정">
        <Form.Item name="isPinned" valuePropName="checked">
          <Checkbox>게시글 고정하기</Checkbox>
        </Form.Item>
      </FormItemWrapper>

      <FormItemWrapper label="첨부파일">
        <Form.Item
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          className="flex flex-col"
        >
          <Upload
            beforeUpload={(file) => {
              handleFileUpload(file);
              return false;
            }}
            maxCount={1}
          >
            <Button className="flex items-center">
              <UploadIcon size={'1rem'} />
              파일 업로드
            </Button>
          </Upload>
        </Form.Item>
      </FormItemWrapper>

      <FormItemWrapper label="본문">
        <Form.Item name="content">
          <Editor
            editorContent={post ? post.content : ''}
            onChange={(value) => form.setFieldsValue({ content: value })}
          />
        </Form.Item>
      </FormItemWrapper>

      <Button
        color="primary"
        variant="solid"
        htmlType="submit"
        size="large"
        className="self-end"
      >
        저장하기
      </Button>
    </Form>
  );
}

export { EditPostField };
