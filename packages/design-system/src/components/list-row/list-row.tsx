import classNames from 'classnames';
import Text from '../text/text';
import { listRowVariants } from './list-row.css';

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  contents: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function ListRow({
  contents,
  left,
  right,
  className,
  ...props
}: Props) {
  return (
    <li className={classNames(listRowVariants(), className)} {...props}>
      <div style={{ flexShrink: 0 }}>{left}</div>
      <div style={{ width: '100%' }}>{contents}</div>
      <div style={{ flexShrink: 0 }}>{right}</div>
    </li>
  );
}

interface Text1RowProps {
  top: string;
  topProps?: React.ComponentProps<typeof Text>;
}

ListRow.Text1Row = ({ top, topProps }: Text1RowProps) => {
  return <Text {...topProps}>{top}</Text>;
};

interface Text2RowsProps {
  top: string;
  topProps?: React.ComponentProps<typeof Text>;
  bottom: string;
  bottomProps?: React.ComponentProps<typeof Text>;
}

ListRow.Text2Rows = ({
  top,
  topProps,
  bottom,
  bottomProps,
}: Text2RowsProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Text {...topProps}>{top}</Text>
      <Text {...bottomProps}>{bottom}</Text>
    </div>
  );
};
