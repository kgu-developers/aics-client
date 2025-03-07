import type { FormInstance } from 'antd';
import { useState } from 'react';

const useEditTable = <T extends { key: React.Key }>(form: FormInstance) => {
  const [editingKey, setEditingKey] = useState<string>('');

  const isEditing = (record: T) => record.key === editingKey;

  const handleEdit = (record: Partial<T> & { key: React.Key }) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record.key as string);
  };

  const cancel = () => {
    setEditingKey('');
  };

  return {
    editingKey,
    isEditing,
    handleEdit,
    cancel,
  };
};

export default useEditTable;
