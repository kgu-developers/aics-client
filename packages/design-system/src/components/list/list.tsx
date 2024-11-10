import clsx from 'clsx';
import { listVariants } from './list.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function List({ className, children, ...props }: Props) {
  return (
    <ul className={clsx(listVariants(), className)} {...props}>
      {children}
    </ul>
  );
}
