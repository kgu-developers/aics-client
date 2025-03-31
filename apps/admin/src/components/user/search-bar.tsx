import { useNavigate } from '@tanstack/react-router';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  defaultValue: string;
}

function SearchBar({ defaultValue }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate({ from: '/user' });

  const handleSearch = (keyword: string) => {
    navigate({
      search: (prev) => ({ ...prev, query: keyword }),
    });
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(searchText);
    }
  };

  return (
    <div className="self-center min-w-[40vw] gap-4 p-2 flex justify-between items-center border border-gray-300 rounded-lg">
      <input
        type="text"
        defaultValue={defaultValue}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={handlePressEnter}
        placeholder="사용자명을 입력하세요"
        className="w-full p-1 outline-none"
      />
      <button
        type="button"
        onClick={() => handleSearch(searchText)}
        className="p-1 transition-colors duration-150 rounded-lg cursor-pointer hover:bg-gray-200"
      >
        <SearchIcon />
      </button>
    </div>
  );
}

export { SearchBar };
