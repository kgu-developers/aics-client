/**
 * 졸업 관련 타입 정의
 *
 * - WorkflowStage: 졸업 진행 워크플로우 단계
 * - SubmissionStatus: 제출물 상태
 */

/**
 * 졸업 워크플로우 진행 단계
 * 학생이 현재 어느 단계에 있는지를 나타냄
 */
export const WORKFLOW_STAGE = {
  /** 졸업 방식 미선택 */
  TYPE_NOT_SELECTED: 'GRADUATION_TYPE_NOT_SUBMITTED',
  /** 지도교수 미배정 */
  PROFESSOR_NOT_ASSIGNED: 'PROFESSOR_NOT_ASSIGNED',
  /** 중간 논문 미제출 */
  MID_THESIS_PENDING: 'MID_THESIS_NOT_SUBMITTED',
  /** 최종 논문 미제출 */
  FINAL_THESIS_PENDING: 'FINAL_THESIS_NOT_SUBMITTED',
  /** 자격증 증빙 미제출 */
  CERTIFICATE_PENDING: 'CERTIFICATE_NOT_SUBMITTED',
  /** 졸업 요건 충족 */
  REQUIREMENTS_MET: 'GRADUATION_REQUIREMENTS_MET',
} as const;

export type WorkflowStage =
  (typeof WORKFLOW_STAGE)[keyof typeof WORKFLOW_STAGE];

/**
 * 졸업 방식
 */
export const GRADUATION_TYPE = {
  /** 논문 방식 */
  THESIS: 'THESIS',
  /** 자격증 방식 */
  CERTIFICATE: 'CERTIFICATE',
} as const;

export type GraduationType =
  (typeof GRADUATION_TYPE)[keyof typeof GRADUATION_TYPE];

/**
 * 사용자 역할
 */
export const USER_ROLE = {
  /** 관리자 */
  ADMIN: 'ADMIN',
  /** 일반 사용자 (학생) */
  USER: 'USER',
} as const;

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

/**
 * 제출물 승인 상태
 */
export const APPROVAL_STATUS = {
  /** 미제출 */
  NOT_SUBMITTED: 'NOT_SUBMITTED',
  /** 검토 중 */
  PENDING: 'PENDING',
  /** 승인됨 */
  APPROVED: 'APPROVED',
  /** 반려됨 */
  REJECTED: 'REJECTED',
} as const;

export type ApprovalStatus =
  (typeof APPROVAL_STATUS)[keyof typeof APPROVAL_STATUS];

/**
 * 자격증 방식 제출 상태
 */
export type CertificateSubmission = {
  type: 'CERTIFICATE';
  id: number | null;
  submitted: boolean;
  approval: boolean;
  createdAt: string | null;
};

/**
 * 논문 방식 제출 상태
 */
export type ThesisSubmission = {
  type: 'THESIS';
  midThesis: {
    id: number | null;
    submitted: boolean;
    approval: boolean;
    createdAt: string | null;
  };
  finalThesis: {
    id: number | null;
    submitted: boolean;
    approval: boolean;
    createdAt: string | null;
  };
};

/**
 * 제출물 상태 (자격증 또는 논문)
 */
export type SubmissionStatus = CertificateSubmission | ThesisSubmission;
