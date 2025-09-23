import { useNavigate } from '@tanstack/react-router'
import { Button, Checkbox, List, Pagination, type PaginationProps } from 'antd'
import { CircleUserRoundIcon, Trash2Icon } from 'lucide-react'
import { useState } from 'react'

import type { UserDetailResponse } from '~/apis/admin/requests'

import { useDeleteUsers } from '~/shared/hooks/useDeleteUsers'

interface UserListHeaderProps {
  isDeleteMode: boolean
  setIsDeleteMode: (isDeleteMode: boolean) => void
  handleDeleteUsers: () => void
}

function UserListHeader({
  isDeleteMode,
  setIsDeleteMode,
  handleDeleteUsers,
}: UserListHeaderProps) {
  return (
    <div className="flex justify-between items-ceneter">
      <h1 className="text-lg font-semibold">사용자 목록</h1>
      {isDeleteMode ? (
        <div className="flex items-center gap-2">
          <Button
            color="danger"
            variant="solid"
            className="flex items-center gap-1"
            onClick={handleDeleteUsers}
          >
            <Trash2Icon size={'1rem'} />
            삭제하기
          </Button>
          <Button onClick={() => setIsDeleteMode(!isDeleteMode)}>취소</Button>
        </div>
      ) : (
        <Button
          color="danger"
          variant="solid"
          className="flex items-center gap-1"
          onClick={() => setIsDeleteMode(!isDeleteMode)}
        >
          <Trash2Icon size={'1rem'} />
          선택하기
        </Button>
      )}
    </div>
  )
}

interface UserListItemProps {
  user: UserDetailResponse
  isDeleteMode: boolean
  selectedUsers: string[]
  setSelectedUsers: (users: string[]) => void
}

function UserListItem({
  user,
  isDeleteMode,
  selectedUsers,
  setSelectedUsers,
}: UserListItemProps) {
  const handleCheckboxChange = (checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, user.id])
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== user.id))
    }
  }

  return (
    <List.Item>
      <div className="flex items-center gap-4">
        <CircleUserRoundIcon />
        <div>
          <div className="flex items-center font-semibold gap-1">
            <p>
              {user.name} │ {user.id}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <p>
              {user.major} │ {user.role} │ {user.email} │ {user.phone}
            </p>
          </div>
        </div>
      </div>
      {isDeleteMode && (
        <Checkbox
          className="flex items-center justify-center"
          onChange={(e) => handleCheckboxChange(e.target.checked)}
          checked={selectedUsers.includes(user.id)}
        />
      )}
    </List.Item>
  )
}

interface UserListProps {
  data: UserDetailResponse[]
  currentPage: number
  total: number
}

function UserList({ data, currentPage, total }: UserListProps) {
  const navigate = useNavigate({ from: '/user' })
  const [isDeleteMode, setIsDeleteMode] = useState(false)
  const { contextHolder, selectedUsers, setSelectedUsers, handleDeleteUsers } =
    useDeleteUsers()

  const handlePageChange: PaginationProps['onChange'] = (currentPage) => {
    navigate({
      search: (prev) => ({ ...prev, page: currentPage - 1 }),
    })
  }

  return (
    <>
      {contextHolder}
      <List
        header={
          <UserListHeader
            isDeleteMode={isDeleteMode}
            setIsDeleteMode={setIsDeleteMode}
            handleDeleteUsers={handleDeleteUsers}
          />
        }
        itemLayout="horizontal"
        bordered
        size="large"
        dataSource={data}
        renderItem={(user) => (
          <UserListItem
            user={user}
            isDeleteMode={isDeleteMode}
            selectedUsers={selectedUsers}
            setSelectedUsers={setSelectedUsers}
          />
        )}
      />
      <Pagination
        align="center"
        showSizeChanger={false}
        defaultCurrent={1}
        current={currentPage + 1}
        total={total}
        onChange={handlePageChange}
      />
    </>
  )
}

export { UserList }
