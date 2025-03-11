import type { FormInstance } from 'antd';
import { useState } from 'react';

const useEditTable = <T extends { key: string }>(form: FormInstance) => {
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: T) => record.key === editingKey;

  const handleEdit = (record: Partial<T> & { key: string }) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const register = {
    isEditing,
    handleEdit,
    cancel,
  };

  return {
    register,
  };
};

export default useEditTable;
