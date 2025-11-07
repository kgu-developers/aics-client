import type { Mode, StageData } from '../types/allManagement';
import { STAGE_NAME_TO_MODE } from '../types/allManagement';

export const getStageColumns = (setMode: (mode: Mode) => void) => [
  {
    title: '단계',
    dataIndex: 'stage',
    key: 'stage',
    render: (_: string, record: StageData) => {
      const mode = STAGE_NAME_TO_MODE[record.stage];
      if (mode && record.isSubmit) {
        return (
          <a
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => setMode(mode)}
          >
            {record.stage}
          </a>
        );
      }
      return record.stage;
    },
  },
  {
    title: '일정',
    dataIndex: 'period',
    key: 'period',
  },
  {
    title: '상태',
    dataIndex: 'state',
    key: 'state',
    render: (_: string, record: StageData) => {
      return (
        <>
          <span>{record.date}</span>
          &nbsp;&nbsp;&nbsp;
          <span>({record.isSubmit ? '제출' : '미제출'})</span>
        </>
      );
    },
  },
];
