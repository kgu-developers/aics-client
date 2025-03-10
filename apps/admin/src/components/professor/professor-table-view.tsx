import { Form, Input, Popconfirm, Table, Typography } from 'antd';
import type { FormInstance, TableProps } from 'antd';
import type { ProfessorData } from './professor-table';

interface ProfessorTableViewProps {
  form: FormInstance;
  data: ProfessorData[];
  register: {
    isEditing: (record: ProfessorData) => boolean;
    handleEdit: (record: Partial<ProfessorData> & { key: React.Key }) => void;
    cancel: () => void;
  };
  handleSave: () => void;
  handleDelete: () => void;
}

interface EditableCellProps {
  editing: boolean;
  dataIndex: string;
  title: string;
  record: ProfessorData;
  children: React.ReactNode;
}

function ProfessorTableView({
  form,
  data,
  register,
  handleSave,
  handleDelete,
}: ProfessorTableViewProps) {
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    record,
    children,
    ...restProps
  }: EditableCellProps) => {
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[{ required: true, message: `${title}을(를) 입력해주세요` }]}
          >
            <Input />
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const columns = [
    { title: '교수명', dataIndex: 'name', width: '15%', editable: true },
    { title: '직책', dataIndex: 'role', width: '10%', editable: true },
    { title: '연락처', dataIndex: 'contact', width: '15%', editable: true },
    { title: '이메일', dataIndex: 'email', width: '20%', editable: true },
    {
      title: '사무실 위치',
      dataIndex: 'officeLoc',
      width: '15%',
      editable: true,
    },
    {
      title: '교수 이미지',
      dataIndex: 'img',
      width: '15%',
      render: (text: string, record: ProfessorData) =>
        text ? (
          <img
            src={text}
            alt={`${record.name} ${record.role} 이미지`}
            className="w-24 h-24"
          />
        ) : (
          <span>이미지가 없습니다.</span>
        ),
      editable: true,
    },
    {
      title: '관리',
      dataIndex: 'operation',
      width: '10%',
      render: (_: unknown, record: ProfessorData) => {
        const editable = register.isEditing(record);
        return editable ? (
          <span className="flex gap-3">
            <Typography.Link onClick={handleSave}>저장</Typography.Link>
            <Popconfirm
              title="정말 취소하시겠습니까?"
              onConfirm={register.cancel}
            >
              <button
                type="button"
                className="text-red-500 hover:cursor-pointer"
              >
                취소
              </button>
            </Popconfirm>
          </span>
        ) : (
          <span className="flex gap-3">
            <Typography.Link
              disabled={register.isEditing(record)}
              onClick={() => register.handleEdit(record)}
            >
              수정
            </Typography.Link>
            <Popconfirm title="정말 삭제하시겠습니까?" onConfirm={handleDelete}>
              <button
                type="button"
                className="text-red-500 hover:cursor-pointer"
              >
                삭제
              </button>
            </Popconfirm>
          </span>
        );
      },
    },
  ];

  const mergedColumns: TableProps<ProfessorData>['columns'] = columns.map(
    (col) => {
      if (!col.editable) return col;

      return {
        ...col,
        onCell: (record: ProfessorData) => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: register.isEditing(record),
        }),
      };
    },
  );

  return (
    <Form form={form} component={false}>
      <Table<ProfessorData>
        components={{ body: { cell: EditableCell } }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{ onChange: register.cancel }}
      />
    </Form>
  );
}

export default ProfessorTableView;
