import classNames from 'classnames';
import { titleVariants } from './title.css';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2';
  description?: string;
  borderBottom?: boolean;
}

export default function Title({
  as: Component = 'h1',
  borderBottom = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <Component
      className={classNames(
        titleVariants({ as: Component, borderBottom }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
