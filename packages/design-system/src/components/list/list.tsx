import { cn } from '../../utils';
import { listVariants } from './list.css';

interface Props extends React.HTMLAttributes<HTMLUListElement> {}

export default function List({ className, children, ...props }: Props) {
  return (
    <ul className={cn(listVariants(), className)} {...props}>
      {children}
    </ul>
  );
}
