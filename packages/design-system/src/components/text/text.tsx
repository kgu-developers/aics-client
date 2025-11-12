import { textVariants } from './text.css';
import { cn } from '../../utils';

interface BaseProps {
  size?: 'sm' | 'md' | 'lg';
  fontWeight?: 'regular' | 'semibold' | 'bold';
  children?: string;
  className?: string;
}

type TextProps<ElementType extends React.ElementType = 'span'> = BaseProps & {
  as?: ElementType;
} & Omit<React.ComponentProps<ElementType>, 'as' | 'children' | 'className'>;

export default function Text<ElementType extends React.ElementType = 'span'>({
  as,
  size = 'md',
  fontWeight = 'regular',
  className,
  children,
  ...rest
}: TextProps<ElementType>) {
  const Component = as ?? 'span';

  return (
    <Component
      className={cn(textVariants({ size, fontWeight }), className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
