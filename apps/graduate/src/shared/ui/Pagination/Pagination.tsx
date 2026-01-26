import { Pagination as AntPagination } from 'antd';

type Props = {
  page: number;
  pageSize: number;
  totalItems: number;
  onGoto: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  align?: 'left' | 'center' | 'right';
};

export default function Pagination({
  page,
  pageSize,
  totalItems,
  onGoto,
  onPageSizeChange,
  align = 'right',
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent:
          align === 'left'
            ? 'flex-start'
            : align === 'center'
              ? 'center'
              : 'flex-end',
        paddingTop: 8,
      }}
    >
      <AntPagination
        current={page}
        total={totalItems}
        pageSize={pageSize}
        showLessItems
        showSizeChanger={Boolean(onPageSizeChange)}
        pageSizeOptions={['10', '20', '50', '100']}
        onChange={(nextPage, nextSize) => {
          if (onPageSizeChange && nextSize !== pageSize) {
            onPageSizeChange(nextSize);
            onGoto(1);
          } else {
            onGoto(nextPage);
          }
        }}
      />
    </div>
  );
}
