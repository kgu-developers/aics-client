import { Button, Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance, TableProps } from 'antd';
import type { ProfessorResponse } from '~/apis/community/requests';
interface ProfessorTableViewProps {
  form: FormInstance;
  data: ProfessorResponse[];
  register: {
    isEditing: (record: ProfessorResponse) => boolean;
    handleEdit: (
      record: Partial<ProfessorResponse> & { id: React.Key },
    ) => void;
    cancel: () => void;
  };
  handleSave: (record: ProfessorResponse) => void;
  handleDelete: (record: ProfessorResponse) => void;
}

interface EditableCellProps {
  editing: boolean;
  dataIndex: string;
  title: string;
  record: ProfessorResponse;
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
    { title: '이메일', dataIndex: 'email', width: '15%', editable: true },
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
      render: (text: string, record: ProfessorResponse) =>
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
      width: '15%',
      render: (_: unknown, record: ProfessorResponse) => {
        const editable = register.isEditing(record);
        return editable ? (
          <span>
            <Button
              color="primary"
              variant="solid"
              onClick={() => handleSave(record)}
              className="mr-4"
            >
              저장
            </Button>
            <Popconfirm
              title="정말 취소하시겠습니까?"
              onConfirm={register.cancel}
            >
              <Button
                color="danger"
                variant="solid"
                className="text-red-500 hover:cursor-pointer"
              >
                취소
              </Button>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Button
              color="primary"
              variant="solid"
              disabled={register.isEditing(record)}
              onClick={() => register.handleEdit({ ...record, id: record.id })}
            >
              수정
            </Button>
            <Popconfirm
              title="정말 삭제하시겠습니까?"
              onConfirm={() => handleDelete(record)}
            >
              <Button
                color="danger"
                variant="solid"
                className="ml-4 text-red-500 hover:cursor-pointer"
              >
                삭제
              </Button>
            </Popconfirm>
          </span>
        );
      },
    },
  ];

  const mergedColumns: TableProps<ProfessorResponse>['columns'] = columns.map(
    (col) => {
      if (!col.editable) return col;

      return {
        ...col,
        onCell: (record: ProfessorResponse) => ({
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
      <Table<ProfessorResponse>
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
