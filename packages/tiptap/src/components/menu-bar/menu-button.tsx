interface MenuButtonProps {
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactNode;
  disabled?: boolean;
}

function MenuButton({
  onClick,
  isActive,
  icon,
  disabled = false,
  ...rest
}: MenuButtonProps) {
  const normal = 'p-2 rounded-lg hover:bg-gray-300';
  const active = 'p-2 rounded-lg bg-black text-white';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={isActive ? active : normal}
      {...rest}
    >
      {icon}
    </button>
  );
}

export { MenuButton };
