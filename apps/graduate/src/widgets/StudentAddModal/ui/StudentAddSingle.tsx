
import { Button, DatePicker, Form, Input, Select } from 'antd';
import type { FormItemProps } from 'antd';
import { useEffect } from 'react';

import { PROFESSORS } from '~/shared/constants/professors';

import { SINGLE_FIELD_TEXT } from '../model/constants';
import type { GraduationUserCreateRequest } from '../types/studentAddModal';


type TextFieldConfig = {
  name: 'studentId' | 'name' | 'department';
  rules: FormItemProps['rules'];
  placeholder: string;
  label: string;
};

const TEXT_FIELD_CONFIGS: ReadonlyArray<TextFieldConfig> = [
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

export default function StudentAddSingle({
  onSubmit,
  open,
}: {
  onSubmit?: (payload: GraduationUserCreateRequest) => void | Promise<void>;
  open?: boolean;
}) {
  const [form] = Form.useForm<GraduationUserCreateRequest>();
  const professorOptions = PROFESSORS.map(p => ({
    label: p.name,
    value: p.id,
  }));
  const capstoneCompletion = [
    { label: '이수', value: true },
    { label: '미이수', value: false },
  ];

  const handleFinish = (v: GraduationUserCreateRequest) => {
    
    const payload: GraduationUserCreateRequest = {
      studentId: v.studentId.trim(),
      name: v.name.trim(),
      advisorProfessor: v.advisorProfessor.trim(),
      capstoneCompletion: v.capstoneCompletion === true,
      department: v.department.trim(),
      graduationDate: v.graduationDate,
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
        name='advisorId'
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
        name='capstoneStatus'
        label={SINGLE_FIELD_TEXT.capstone.label}
        rules={[
          { required: true, message: SINGLE_FIELD_TEXT.capstone.required },
        ]}
      >
        <Select options={capstoneCompletion} />
      </Form.Item>

      <Form.Item
        name='graduationMonth'
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
