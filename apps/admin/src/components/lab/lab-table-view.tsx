import { UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Typography,
  Upload,
} from 'antd';
import type { FormInstance, TableProps } from 'antd';
import type { LabDetailResponse } from '~/apis/community/requests';

interface LabTableViewProps {
  form: FormInstance;
  data: LabDetailResponse[];
  register: {
    isEditing: (record: LabDetailResponse) => boolean;
    handleEdit: (
      record: Partial<LabDetailResponse> & { id: React.Key },
    ) => void;
    cancel: () => void;
  };
  handleSave: (record: LabDetailResponse) => void;
  handleDelete: (record: LabDetailResponse) => void;
  handleImageUpload: (record: LabDetailResponse) => (file: File) => boolean;
}

interface EditableCellProps {
  editing: boolean;
  dataIndex: string;
  title: string;
  record: LabDetailResponse;
  children: React.ReactNode;
}

function LabTableView({
  form,
  data,
  register,
  handleSave,
  handleDelete,
  handleImageUpload,
}: LabTableViewProps) {
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
            rules={[
              { required: true, message: `${title}을(를) 입력해주세요!` },
            ]}
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
    { title: '연구실명', dataIndex: 'name', width: '15%', editable: true },
    { title: '위치', dataIndex: 'loc', width: '15%', editable: true },
    {
      title: '웹사이트',
      dataIndex: 'site',
      width: '15%',
      editable: true,
      render: (text: string) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    { title: '담당교수', dataIndex: 'advisor', width: '10%', editable: true },
    {
      title: '관리',
      dataIndex: 'operation',
      width: '10%',
      render: (_: unknown, record: LabDetailResponse) => {
        const editable = register.isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => handleSave(record)}
              className="mr-4"
            >
              저장
            </Typography.Link>
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
          <span>
            <Typography.Link
              disabled={register.isEditing(record)}
              onClick={() => register.handleEdit({ ...record, id: record.id })}
            >
              수정
            </Typography.Link>
            <Popconfirm
              title="정말 삭제하시겠습니까?"
              onConfirm={() => handleDelete(record)}
            >
              <button
                type="button"
                className="ml-4 text-red-500 hover:cursor-pointer"
              >
                삭제
              </button>
            </Popconfirm>
          </span>
        );
      },
    },
    {
      title: '연구실 이미지',
      dataIndex: 'img',
      width: '20%',
      render: (_: unknown, record: LabDetailResponse) => (
        <div>
          {record.img?.physicalPath && (
            <img
              src={record.img.physicalPath}
              alt={`${record.name} 이미지`}
              className="w-24 h-24"
            />
          )}
          <Upload
            showUploadList={false}
            beforeUpload={(file) => handleImageUpload(record)(file)}
          >
            <Button icon={<UploadOutlined />} className="mt-2">
              업로드
            </Button>
          </Upload>
        </div>
      ),
    },
  ];

  const mergedColumns: TableProps<LabDetailResponse>['columns'] = columns.map(
    (col) => {
      if (!col.editable) return col;

      return {
        ...col,
        onCell: (record: LabDetailResponse) => ({
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
      <Table<LabDetailResponse>
        components={{ body: { cell: EditableCell } }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{ onChange: register.cancel }}
        className="break-keep whitespace-nowrap"
      />
    </Form>
  );
}

export default LabTableView;
