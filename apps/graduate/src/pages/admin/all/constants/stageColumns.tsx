
import {
  HEADER_PERIOD,
  HEADER_STAGE,
  HEADER_STATUS,
  STATUS_NOT_SUBMITTED,
  STATUS_SUBMITTED,
} from './allManagementTexts';
import type { Mode, StageData } from '../types/allManagement';
import { STAGE_NAME_TO_MODE } from '../types/allManagement';

import { vars } from '~/vars.css';


export const getStageColumns = (setMode: (mode: Mode) => void) => [
  {
    title: HEADER_STAGE,
    dataIndex: 'stage',
    key: 'stage',
    render: (_: string, record: StageData) => {
      const mode = STAGE_NAME_TO_MODE[record.stage];
      if (mode && record.isSubmit) {
        return (
          <button
            type='button'
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              margin: 0,
              cursor: 'pointer',
              color: vars.colors.main,
              textDecoration: 'underline',
            }}
            onClick={() => setMode(mode)}
          >
            {record.stage}
          </button>
        );
      }
      return record.stage;
    },
  },
  {
    title: HEADER_PERIOD,
    dataIndex: 'period',
    key: 'period',
  },
  {
    title: HEADER_STATUS,
    dataIndex: 'state',
    key: 'state',
    render: (_: string, record: StageData) => {
      return (
        <>
          <span>{record.date}</span>
          &nbsp;&nbsp;&nbsp;
          <span>
            ({record.isSubmit ? STATUS_SUBMITTED : STATUS_NOT_SUBMITTED})
          </span>
        </>
      );
    },
  },
];
