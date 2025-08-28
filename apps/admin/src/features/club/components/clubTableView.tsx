import { UploadOutlined } from '@ant-design/icons'
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Typography,
  Upload,
  message,
} from 'antd'
import type { FormInstance, TableProps } from 'antd'
import type { ClubDetailResponse } from '~/features/club/types'

const IMAGE_BASE_URL = import.meta.env.VITE_PUBLIC_IMAGE_URL

interface ClubTableViewProps {
  form: FormInstance
  data: ClubDetailResponse[]
  register: {
    isEditing: (record: ClubDetailResponse) => boolean
    handleEdit: (
      record: Partial<ClubDetailResponse> & { id: React.Key },
    ) => void
    cancel: () => void
  }
  handleSave: (record: ClubDetailResponse) => void | Promise<void>
  handleDelete: (record: ClubDetailResponse) => void | Promise<void>
  handleImageUpload: (
    record: ClubDetailResponse,
  ) => (file: File) => boolean | Promise<boolean>
}

interface EditableCellProps {
  editing: boolean
  dataIndex: string
  title: string
  record: ClubDetailResponse
  children: React.ReactNode
}

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
          rules={[{ required: true, message: `${title}을(를) 입력해주세요!` }]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

function ClubTableView({
  form,
  data,
  register,
  handleSave,
  handleDelete,
  handleImageUpload,
}: ClubTableViewProps) {
  const [_messageApi, contextHolder] = message.useMessage()

  const columns = [
    { title: '동아리명', dataIndex: 'name', width: '15%', editable: true },
    { title: '소개', dataIndex: 'description', width: '15%', editable: true },
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
    {
      title: '관리',
      dataIndex: 'operation',
      width: '10%',
      render: (_: unknown, record: ClubDetailResponse) => {
        const editable = register.isEditing(record)
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
        )
      },
    },
    {
      title: '동아리 이미지',
      dataIndex: 'file',
      width: '20%',
      render: (_: unknown, record: ClubDetailResponse) =>
        renderImageUpload(record),
    },
  ]

  const renderImageUpload = (record: ClubDetailResponse) => (
    <div>
      {record.file?.physicalPath && (
        <img
          src={`${IMAGE_BASE_URL}${record.file.physicalPath}`}
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
  )

  const mergedColumns: TableProps<ClubDetailResponse>['columns'] = columns.map(
    (col) => {
      if (!('editable' in col) || !col.editable) return col
      return {
        ...col,
        onCell: (record: ClubDetailResponse) => ({
          record,
          dataIndex: col.dataIndex as string,
          title: col.title as string,
          editing: register.isEditing(record),
        }),
      }
    },
  )

  return (
    <>
      {contextHolder}
      <Form form={form} component={false}>
        <Table<ClubDetailResponse>
          components={{ body: { cell: EditableCell } }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{ onChange: register.cancel }}
          rowKey="id"
          className="break-keep whitespace-nowrap"
        />
      </Form>
    </>
  )
}

export default ClubTableView
