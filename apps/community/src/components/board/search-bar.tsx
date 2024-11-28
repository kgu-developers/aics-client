import { Search } from '@aics-client/design-system/icons';

import * as styles from '~/components/board/search-bar.css';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

function SearchBar({ value, onChange, onKeyUp, onClick }: Props) {
  return (
    <div className={styles.searchBarWrapper}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder="검색어를 입력하세요"
        className={styles.input}
      />
      <button type="button" onClick={onClick}>
        <Search />
      </button>
    </div>
  );
}

export { SearchBar };
