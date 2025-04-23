import { sprinkles } from '../../styles'
import { cn } from '../../utils'
import Text from '../text/text'
import { listRowVariants } from './list-row.css'

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  contents: React.ReactNode
  left?: React.ReactNode
  right?: React.ReactNode
}

export default function ListRow({
  contents,
  left,
  right,
  className,
  ...props
}: Props) {
  return (
    <li className={cn(listRowVariants(), className)} {...props}>
      <div className={sprinkles({ flexShrink: '0' })}>{left}</div>
      <div className={sprinkles({ width: 'full' })}>{contents}</div>
      <div className={sprinkles({ flexShrink: '0' })}>{right}</div>
    </li>
  )
}

interface Text1RowProps {
  top: string
  topProps?: React.ComponentProps<typeof Text>
}

function Text1Row({ top, topProps }: Text1RowProps) {
  return <Text {...topProps}>{top}</Text>
}

interface Text2RowsProps {
  top: string
  topProps?: React.ComponentProps<typeof Text>
  bottom: string
  bottomProps?: React.ComponentProps<typeof Text>
}

function Text2Rows({ top, topProps, bottom, bottomProps }: Text2RowsProps) {
  return (
    <div className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
      <Text {...topProps}>{top}</Text>
      <Text {...bottomProps}>{bottom}</Text>
    </div>
  )
}

ListRow.Text1Row = Text1Row
ListRow.Text2Rows = Text2Rows
