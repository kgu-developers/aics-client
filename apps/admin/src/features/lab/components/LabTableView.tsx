import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Popconfirm, Table, Upload } from 'antd';
import type { FormInstance, TableProps } from 'antd';

import { MESSAGES, TABLE_COLUMNS } from '../constant/constants';

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

export const LabTableView = ({
  form,
  data,
  register,
  handleSave,
  handleDelete,
  handleImageUpload,
}: LabTableViewProps) => {
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
              { required: true, message: MESSAGES.validation.requiredTitle },
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
    {
      title: TABLE_COLUMNS.name.label,
      dataIndex: TABLE_COLUMNS.name.key,
      width: TABLE_COLUMNS.width.md,
      editable: true,
    },
    {
      title: TABLE_COLUMNS.location.key,
      dataIndex: TABLE_COLUMNS.location.label,
      width: TABLE_COLUMNS.width.md,
      editable: true,
    },
    {
      title: TABLE_COLUMNS.site.label,
      dataIndex: TABLE_COLUMNS.site.key,
      width: TABLE_COLUMNS.width.md,
      editable: true,
      render: (text: string) => (
        <a href={text} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      ),
    },
    {
      title: TABLE_COLUMNS.advisor.label,
      dataIndex: TABLE_COLUMNS.advisor.key,
      width: TABLE_COLUMNS.width.sm,
      editable: true,
    },

    {
      title: TABLE_COLUMNS.image.label,
      dataIndex: TABLE_COLUMNS.image.key,
      width: TABLE_COLUMNS.width.lg,
      render: (_: unknown, record: LabDetailResponse) => {
        const editable = register.isEditing(record);
        return (
          <div>
            {record.img?.physicalPath && (
              <img
                src={record.img.physicalPath}
                alt={`${record.name} 이미지`}
                className='w-24 h-24'
              />
            )}
            <Upload
              showUploadList={false}
              beforeUpload={file => handleImageUpload(record)(file)}
            >
              {editable && (
                <Button icon={<UploadOutlined />} className='mt-2'>
                  {MESSAGES.button.uploadImage}
                </Button>
              )}
            </Upload>
          </div>
        );
      },
    },
    {
      title: TABLE_COLUMNS.operation.label,
      dataIndex: TABLE_COLUMNS.operation.key,
      width: TABLE_COLUMNS.width.sm,
      render: (_: unknown, record: LabDetailResponse) => {
        const editable = register.isEditing(record);
        return editable ? (
          <span>
            <Button
              color='primary'
              variant='solid'
              onClick={() => handleSave(record)}
              className='mr-4'
            >
              {MESSAGES.button.save}
            </Button>
            <Popconfirm
              title={MESSAGES.confirm.cancel}
              onConfirm={register.cancel}
            >
              <Button
                color='danger'
                variant='solid'
                className='text-red-500 hover:cursor-pointer'
              >
                {MESSAGES.button.cancel}
              </Button>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Button
              color='primary'
              variant='solid'
              disabled={register.isEditing(record)}
              onClick={() => register.handleEdit({ ...record, id: record.id })}
            >
              {MESSAGES.button.update}
            </Button>
            <Popconfirm
              title={MESSAGES.confirm.delete}
              onConfirm={() => handleDelete(record)}
            >
              <Button
                color='danger'
                variant='solid'
                className='ml-4 text-red-500 hover:cursor-pointer'
              >
                {MESSAGES.button.delete}
              </Button>
            </Popconfirm>
          </span>
        );
      },
    },
  ];

  const mergedColumns: TableProps<LabDetailResponse>['columns'] = columns.map(
    col => {
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
        rowClassName='editable-row'
        pagination={{ onChange: register.cancel }}
        className='break-keep whitespace-nowrap'
      />
    </Form>
  );
};

export default LabTableView;
