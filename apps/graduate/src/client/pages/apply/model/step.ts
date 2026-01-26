import { StepsProps } from 'antd';

import {
  GRADUATION_TYPE,
  type GraduationType,
} from '~/shared/types/graduation';

export const STEP_TITLE: Record<GraduationType, string> = {
  [GRADUATION_TYPE.THESIS]: '졸업 논문 보고서 제출',
  [GRADUATION_TYPE.CERTIFICATE]: '자격증 증빙 서류 제출',
};

export const STEP: Record<GraduationType, StepsProps['items']> = {
  [GRADUATION_TYPE.THESIS]: [
    {
      title: '대체 신청',
      description: '자격증 제출 혹은 졸업 논문 보고서를 통해 신청할 수 있어요',
    },
    {
      title: '졸업 논문 중간 보고서 제출',
      description:
        '졸업 논문의 경우, 중간 보고서 및 최종 보고서를 제출해야 해요.',
    },
    {
      title: '졸업 논문 최종 보고서 제출',
      description:
        '졸업 논문의 경우, 중간 보고서 및 최종 보고서를 제출해야 해요.',
    },
    {
      title: '졸업 승인',
      description: '제출이 확인되면 졸업이 승인돼요.',
    },
  ],
  [GRADUATION_TYPE.CERTIFICATE]: [
    {
      title: '대체 신청',
      description: '자격증 제출 혹은 졸업 논문 보고서를 통해 신청할 수 있어요',
    },
    {
      title: '자격증 증빙 서류 제출',
      description:
        '대체 신청한 경우, 자격 취득 여부를 증명할 수 있는 서류를 제출해요. 졸업 논문의 경우, 중간 보고서 및 최종 보고서를 제출해야 해요.',
    },
    {
      title: '졸업 승인',
      description: '제출이 확인되면 졸업이 승인돼요.',
    },
  ],
};
