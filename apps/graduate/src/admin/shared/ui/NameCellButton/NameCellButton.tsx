import { vars } from '~/vars.css';

interface NameCellButtonProps {
  name: string;
  onClick: () => void;
}

export default function NameCellButton({ name, onClick }: NameCellButtonProps) {
  return (
    <button
      type='button'
      aria-label={`${name} 상세 보기`}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        color: vars.colors.main,
        textDecoration: 'underline',
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
