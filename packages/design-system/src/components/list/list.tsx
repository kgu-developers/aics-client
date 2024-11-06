import classNames from 'classnames';
import { listVariants } from './list.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function List({ className, children, ...props }: Props) {
  return (
    <ul className={classNames(listVariants(), className)} {...props}>
      {children}
    </ul>
  );
}
