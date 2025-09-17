import { useNavigate } from '@tanstack/react-router'
import { Input } from 'antd'

import { PLACEHOLDERS } from '~/shared/constant/post.constants'

interface SearchBarProps {
  defaultValue: string
}

function SearchBar({ defaultValue }: SearchBarProps) {
  const navigate = useNavigate({ from: '/notice' })
  const { Search } = Input

  const handleSearch = (keyword: string) => {
    navigate({
      search: (prev) => ({ ...prev, query: keyword }),
    })
  }

  return (
    <div className="self-center min-w-[40vw]">
      <Search
        placeholder={PLACEHOLDERS.userName}
        defaultValue={defaultValue}
        allowClear
        size="large"
        onSearch={handleSearch}
      />
    </div>
  )
}

export { SearchBar }
