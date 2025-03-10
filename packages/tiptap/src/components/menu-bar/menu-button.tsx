interface MenuButtonProps {
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactNode;
  disabled?: boolean;
}

const NORMAL = 'p-2 rounded-lg hover:bg-gray-300';
const ACTIVE = 'p-2 rounded-lg bg-black text-white';

function MenuButton({
  onClick,
  isActive,
  icon,
  disabled = false,
  ...rest
}: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={isActive ? ACTIVE : NORMAL}
      {...rest}
    >
      {icon}
    </button>
  );
}

export { MenuButton };
