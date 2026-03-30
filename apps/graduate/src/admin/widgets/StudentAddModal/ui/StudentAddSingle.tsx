import type { FormItemProps } from 'antd';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import type { Dayjs } from 'dayjs';
import { useEffect } from 'react';

import { PROFESSORS } from '~/shared/constants/professors';

import { SINGLE_FIELD_TEXT } from '../model/constants';
import {
  CAPSTONE_COMPLETION_OPTIONS,
  type CapstoneCompletionOption,
  type GraduationUserCreateRequest,
} from '../types/studentAddModal';

type TextFieldConfig = {
  name: 'studentId' | 'name' | 'department';
  rules: FormItemProps['rules'];
  placeholder: string;
  label: string;
};

const TEXT_FIELD_CONFIGS: TextFieldConfig[] = [
  {
    name: 'studentId',
    rules: [
      { required: true, message: SINGLE_FIELD_TEXT.studentNo.required },
      { pattern: /^\d{9}$/, message: SINGLE_FIELD_TEXT.studentNo.pattern },
    ],
    placeholder: SINGLE_FIELD_TEXT.studentNo.placeholder,
    label: SINGLE_FIELD_TEXT.studentNo.label,
  },
  {
    name: 'name',
    rules: [{ required: true, message: SINGLE_FIELD_TEXT.name.required }],
    placeholder: SINGLE_FIELD_TEXT.name.placeholder,
    label: SINGLE_FIELD_TEXT.name.label,
  },
  {
    name: 'department',
    rules: [{ required: true, message: SINGLE_FIELD_TEXT.department.required }],
    placeholder: SINGLE_FIELD_TEXT.department.placeholder,
    label: SINGLE_FIELD_TEXT.department.label,
  },
];

type FormValues = Omit<
  GraduationUserCreateRequest,
  'graduationDate' | 'capstoneCompletion'
> & {
  capstoneCompletion: CapstoneCompletionOption['value'];
  graduationDate: Dayjs | null;
};

export default function StudentAddSingle({
  onSubmit,
  open,
}: {
  onSubmit?: (payload: GraduationUserCreateRequest) => void | Promise<void>;
  open?: boolean;
}) {
  const [form] = Form.useForm<FormValues>();
  const professorOptions = PROFESSORS.map(p => ({
    label: p.name,
    value: p.name,
  }));

  const handleFinish = (v: FormValues) => {
    if (!v.graduationDate) return;
    const payload: GraduationUserCreateRequest = {
      studentId: v.studentId.trim(),
      name: v.name.trim(),
      advisorProfessor: v.advisorProfessor.trim(),
      capstoneCompletion: v.capstoneCompletion === 'true',
      department: v.department.trim(),
      graduationDate: v.graduationDate.format('YYYY-MM'),
    };
    onSubmit?.(payload);
    form.resetFields();
  };

  useEffect(() => {
    if (open) form.resetFields();
  }, [open, form]);

  return (
    <Form form={form} layout='vertical' onFinish={handleFinish}>
      {TEXT_FIELD_CONFIGS.map(field => (
        <Form.Item
          key={field.name}
          name={field.name}
          label={field.label}
          rules={field.rules}
        >
          <Input placeholder={field.placeholder} />
        </Form.Item>
      ))}

      <Form.Item
        name='advisorProfessor'
        label={SINGLE_FIELD_TEXT.advisor.label}
        rules={[
          { required: true, message: SINGLE_FIELD_TEXT.advisor.required },
        ]}
      >
        <Select
          showSearch
          optionFilterProp='label'
          options={professorOptions}
          placeholder={SINGLE_FIELD_TEXT.advisor.placeholder}
        />
      </Form.Item>

      <Form.Item
        name='capstoneCompletion'
        label={SINGLE_FIELD_TEXT.capstone.label}
        rules={[
          { required: true, message: SINGLE_FIELD_TEXT.capstone.required },
        ]}
      >
        <Select options={CAPSTONE_COMPLETION_OPTIONS} />
      </Form.Item>

      <Form.Item
        name='graduationDate'
        label={SINGLE_FIELD_TEXT.graduationMonth.label}
        rules={[
          {
            required: true,
            message: SINGLE_FIELD_TEXT.graduationMonth.required,
          },
        ]}
      >
        <DatePicker
          picker='month'
          format='YYYY-MM'
          style={{ width: '100%' }}
          placeholder={SINGLE_FIELD_TEXT.graduationMonth.placeholder}
        />
      </Form.Item>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type='primary' htmlType='submit'>
          {SINGLE_FIELD_TEXT.submitLabel}
        </Button>
      </div>
    </Form>
  );
}
