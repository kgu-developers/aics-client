import { useNavigate } from '@tanstack/react-router'
import { Input } from 'antd'

interface SearchBarProps {
  defaultValue: string
}

function SearchBar({ defaultValue }: SearchBarProps) {
  const navigate = useNavigate({ from: '/user' })
  const { Search } = Input

  const handleSearch = (keyword: string) => {
    navigate({
      search: (prev) => ({ ...prev, query: keyword }),
    })
  }

  return (
    <div className="self-center min-w-[40vw]">
      <Search
        placeholder="사용자명을 입력하세요"
        defaultValue={defaultValue}
        allowClear
        size="large"
        onSearch={handleSearch}
      />
    </div>
  )
}

export { SearchBar }
