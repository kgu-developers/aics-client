'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Input } from '@aics-client/design-system';
import { Search } from '@aics-client/design-system/icons';

import * as styles from '~/components/board/search-bar.css';

function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const [keyword, setKeyword] = useState('');

  const handleSearch = (keyword: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '0');

    if (keyword) {
      params.set('keyword', keyword);
    } else {
      params.delete('keyword');
    }

    replace(`${pathName}?${params.toString()}`);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(keyword);
    }
  };

  return (
    <div className={styles.searchBarWrapper}>
      <Input
        variant="ghost"
        type="text"
        defaultValue={searchParams.get('keyword')?.toString()}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={handlePressEnter}
        placeholder={placeholder}
        className={styles.input}
      />
      <button
        type="button"
        onClick={() => handleSearch(keyword)}
        className={styles.button}
      >
        <Search />
      </button>
    </div>
  );
}

export { SearchBar };
