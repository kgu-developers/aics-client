import classNames from 'classnames';
import Spacing from '../spacing/spacing';
import Text from '../text/text';
import { cardDescriptionVariants, cardVariants } from './card.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({ className, children, ...props }: Props) {
  return (
    <div className={classNames(cardVariants(), className)} {...props}>
      {children}
    </div>
  );
}

interface HeaderProps {
  title: string;
  description?: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <div>
      <Text as="h3" fontWeight="semibold">
        {title}
      </Text>
      {description && (
        <Text as="p" size="sm" className={cardDescriptionVariants()}>
          {description}
        </Text>
      )}
      <Spacing size="md" />
    </div>
  );
};

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div>{children}</div>;
};

Header.displayName = 'CardHeader';
Content.displayName = 'CardContent';

Card.Header = Header;
Card.Content = Content;
