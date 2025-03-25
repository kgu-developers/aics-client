import type { FormInstance } from 'antd';
import { useState } from 'react';

const useEditTable = <T extends { id: React.Key }>(form: FormInstance) => {
  const [editingKey, setEditingKey] = useState<React.Key | null>(null);

  const isEditing = (record: T) => record.id === editingKey;

  const handleEdit = (record: Partial<T> & { id: React.Key }) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey(null);
  };

  return {
    register: {
      isEditing,
      handleEdit,
      cancel,
    },
  };
};

export default useEditTable;
