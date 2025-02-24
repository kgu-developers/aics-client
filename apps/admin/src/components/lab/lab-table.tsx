import { UploadOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Typography,
  Upload,
} from 'antd';
import { useState } from 'react';

interface LabData {
  key: string;
  name: string;
  loc: string;
  site: string;
  advisor: string;
  img?: {
    id: number;
    physicalPath: string;
  };
}

const labData: LabData[] = [
  {
    key: '1',
    name: '인공지능연구실',
    loc: '8502, 8503',
    site: 'http://ailab.kyonggi.ac.kr',
    advisor: '박민준',
    img: {
      id: 1,
      physicalPath:
        'https://aics-client.vercel.app/_next/image?url=https%3A%2F%2Fwww.kyonggi.ac.kr%2Fsite%2Fu_ai%2Fimages%2Fcontents%2Fkey9123_img01.png&w=3840&q=75',
    },
  },
  {
    key: '2',
    name: '데이터연구실',
    site: 'http://datalab.kyonggi.ac.kr',
    loc: '8502, 8503',
    advisor: '이서준',
    img: {
      id: 2,
      physicalPath: '/files/lab/20250131/lab-A.png',
    },
  },
];

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  record: LabData;
  index: number;
}

function EditableCell({
  editing,
  dataIndex,
  title,
  record,
  children,
  ...restProps
}: EditableCellProps) {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[{ required: true, message: `${title}을(를) 입력해주세요!` }]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
}

function LabTable() {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: LabData) => record.key === editingKey;

  const handleEdit = (record: Partial<LabData> & { key: React.Key }) => {
    form.setFieldsValue({
      name: '',
      loc: '',
      site: '',
      advisor: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const handleSave = () => {
    // TODO: 연구실 수정 PATCH API 연동
  };

  const handleDelete = () => {
    // TODO: 연구실 삭제 DELETE API 연동
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
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
      render: (_: unknown, record: LabData) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => handleSave()} className="mr-4">
              저장
            </Typography.Link>
            <Popconfirm title="정말 취소하시겠습니까?" onConfirm={cancel}>
              <button type="button" className="text-red-500">
                취소
              </button>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => handleEdit(record)}
            >
              수정
            </Typography.Link>
            <Popconfirm
              title="정말 삭제하시겠습니까?"
              onConfirm={() => handleDelete()}
            >
              <button type="button" className="ml-4 text-red-500">
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
      render: (_: unknown, record: LabData) => (
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
            beforeUpload={(file) => handleImageUpload(file)}
          >
            <Button icon={<UploadOutlined />} className="mt-2">
              업로드
            </Button>
          </Upload>
        </div>
      ),
    },
  ];

  const mergedColumns: TableProps<LabData>['columns'] = columns.map((col) => {
    if (!col.editable) return col;

    return {
      ...col,
      onCell: (record: LabData) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table<LabData>
        components={{ body: { cell: EditableCell } }}
        bordered
        dataSource={labData}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{ onChange: cancel }}
      />
    </Form>
  );
}

export default LabTable;
