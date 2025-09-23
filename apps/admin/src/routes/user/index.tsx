import { createFileRoute, useSearch } from '@tanstack/react-router'
import { Spin } from 'antd'
import { Suspense } from 'react'
import { useUserServiceGetApiV1Users } from '~/apis/admin/queries'
import { SearchBar, UserList } from '~/features/user/components'

export const Route = createFileRoute('/user/')({
  component: UserPage,
  validateSearch: (search: { page?: string; query?: string }) => ({
    page: Number(search.page) || 0,
    query: typeof search.query === 'string' ? search.query : '',
  }),
})

const LIST_SIZE = 10

function UserPage() {
  const { page: currentPage, query: name } = useSearch({
    from: '/user/',
  })

  const { data: userList } = useUserServiceGetApiV1Users({
    page: currentPage,
    size: LIST_SIZE,
    name: name,
  })

  return (
    <section className="flex flex-col gap-3 px-16">
      <SearchBar defaultValue={name} />
      <Suspense fallback={<Spin />}>
        {userList?.contents && (
          <UserList
            data={userList.contents}
            currentPage={currentPage}
            total={userList.pageable.totalElements}
          />
        )}
      </Suspense>
    </section>
  )
}
