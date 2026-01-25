/**
 * 졸업 워크플로우 관련 상수 및 설정
 */

import { WORKFLOW_STAGE, type WorkflowStage } from '~/shared/types/graduation';
import ROUTE from './route';

/**
 * 워크플로우 단계별 표시 텍스트
 */
export const WORKFLOW_STAGE_LABEL: Record<WorkflowStage, string> = {
  [WORKFLOW_STAGE.TYPE_NOT_SELECTED]: '기타',
  [WORKFLOW_STAGE.PROFESSOR_NOT_ASSIGNED]: '지도교수 배정',
  [WORKFLOW_STAGE.MID_THESIS_PENDING]: '중간 논문',
  [WORKFLOW_STAGE.FINAL_THESIS_PENDING]: '최종 논문',
  [WORKFLOW_STAGE.CERTIFICATE_PENDING]: '자격증 증빙',
  [WORKFLOW_STAGE.REQUIREMENTS_MET]: '졸업 승인',
} as const;

/**
 * 워크플로우 단계별 상세 정보
 */
type WorkflowStageInfo = {
  /** 제목 */
  title: string;
  /** 설명 */
  description: string;
  /** 액션 버튼 정보 */
  button: {
    label: string;
    href: (typeof ROUTE)[keyof typeof ROUTE];
  };
};

/**
 * 워크플로우 단계별 상세 정보 매핑
 */
export const WORKFLOW_STAGE_INFO: Record<WorkflowStage, WorkflowStageInfo> = {
  [WORKFLOW_STAGE.TYPE_NOT_SELECTED]: {
    title: '아직 졸업 요건 취득 방식을 지정하지 않았어요.',
    description: `졸업 요건 취득 방식 신청 기간이에요.
요건 취득 방식을 정해 신청해주세요.`,
    button: {
      label: '졸업 요건 취득 방식 지정하기',
      href: ROUTE.APPLY,
    },
  },
  [WORKFLOW_STAGE.PROFESSOR_NOT_ASSIGNED]: {
    title: '지도교수가 배정되지 않았어요.',
    description: `지도교수 배정 신청을 진행해주세요.
지도교수 배정 후 졸업 논문 작성을 시작할 수 있어요.`,
    button: {
      label: '지도교수 배정 신청하기',
      href: ROUTE.APPLY,
    },
  },
  [WORKFLOW_STAGE.MID_THESIS_PENDING]: {
    title: '중간 보고서를 제출하지 않았어요.',
    description: `중간 보고서를 제출해주세요.
중간 보고서 마감 기한은 2026년 1월 31일까지에요.`,
    button: {
      label: '중간 보고서 제출하기',
      href: ROUTE.THESIS_MIDREPORT,
    },
  },
  [WORKFLOW_STAGE.FINAL_THESIS_PENDING]: {
    title: '최종 보고서를 제출하지 않았어요.',
    description: `최종 보고서를 제출해주세요.
최종 보고서 마감 기한은 2026년 2월 28일까지에요.`,
    button: {
      label: '최종 보고서 제출하기',
      href: ROUTE.THESIS_FINALREPORT,
    },
  },
  [WORKFLOW_STAGE.CERTIFICATE_PENDING]: {
    title: '자격증 증빙 문서를 제출하지 않았어요.',
    description: `자격증 증빙 문서를 제출해주세요.
자격증 증빙 문서 마감 기한은 2026년 3월 31일까지에요.`,
    button: {
      label: '자격증 증빙 문서 제출하기',
      href: ROUTE.CERTIFICATION,
    },
  },
  [WORKFLOW_STAGE.REQUIREMENTS_MET]: {
    title: '졸업 승인이 완료되었어요.',
    description: `졸업 요건이 모두 충족되었어요.
졸업 승인 일정을 확인해주세요.`,
    button: {
      label: '일정 확인하기',
      href: ROUTE.STATUS,
    },
  },
} as const;
