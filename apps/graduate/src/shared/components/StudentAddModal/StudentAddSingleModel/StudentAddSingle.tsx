import { Form, Input, Select, DatePicker, Button } from 'antd';
import type { Dayjs } from 'dayjs';
import { useEffect } from 'react';

import { PROFESSORS } from '~/shared/constants/professors';

import type { SingleSubmitPayload } from '../types';

type FormInnerValues = Omit<SingleSubmitPayload, 'graduationMonth'> & {
  graduationMonth: Dayjs;
};

export default function StudentAddSingle({
  onSubmit,
  open,
}: {
  onSubmit?: (payload: SingleSubmitPayload) => void | Promise<void>;
  open?: boolean;
}) {
  const [form] = Form.useForm<FormInnerValues>();
  const professorOptions = PROFESSORS.map(p => ({
    label: p.name,
    value: p.id,
  }));

  const handleFinish = (v: FormInnerValues) => {
    const payload: SingleSubmitPayload = {
      studentNo: v.studentNo.trim(),
      name: v.name.trim(),
      advisorId: v.advisorId,
      capstoneStatus: v.capstoneStatus,
      graduationMonth: v.graduationMonth.format('YYYY-MM'),
      department: v.department.trim(),
    };
    onSubmit?.(payload);
    form.resetFields();
  };

  useEffect(() => {
    if (open) form.resetFields();
  }, [open,form]);

  return (
    <Form form={form} layout='vertical' onFinish={handleFinish}>
      <Form.Item
        name='studentNo'
        label='학번'
        rules={[
          { required: true, message: '학번을 입력하세요' },
          { pattern: /^\d{9}$/, message: '학번은 숫자 9자리여야 합니다' },
        ]}
      >
        <Input placeholder='학번을 입력해주세요' />
      </Form.Item>

      <Form.Item
        name='name'
        label='이름'
        rules={[{ required: true, message: '이름을 입력하세요' }]}
      >
        <Input placeholder='이름을 입력해주세요' />
      </Form.Item>

      <Form.Item
        name='advisorId'
        label='지도교수 배정'
        rules={[{ required: true, message: '지도교수를 선택하세요' }]}
      >
        <Select
          showSearch
          optionFilterProp='label'
          options={professorOptions}
          placeholder='지도교수를 선택하세요'
        />
      </Form.Item>

      <Form.Item
        name='capstoneStatus'
        label='캡스톤이수여부'
        rules={[{ required: true, message: '캡스톤이수여부를 선택하세요' }]}
      >
        <Select
          options={[
            { label: '이수', value: 'PASSED' },
            { label: '미이수', value: 'FAILED' },
          ]}
        />
      </Form.Item>

      <Form.Item
        name='graduationMonth'
        label='졸업년도'
        rules={[{ required: true, message: '졸업년도를 선택하세요' }]}
      >
        <DatePicker
          picker='month'
          format='YYYY-MM'
          style={{ width: '100%' }}
          placeholder='YYYY-MM'
        />
      </Form.Item>

      <Form.Item
        name='department'
        label='학과'
        rules={[{ required: true, message: '학과를 입력하세요' }]}
      >
        <Input placeholder='학과를 입력해주세요' />
      </Form.Item>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type='primary' htmlType='submit'>
          입력
        </Button>
      </div>
    </Form>
  );
}
