export interface CertificateFileResponse {
  id: number;
  scheduleId: number;
  approval: boolean;
  certificateFile: {
    id: number;
    physicalPath: string;
  };
}
export interface ThesisFileResponse {
  id: number;
  scheduleId: number;
  approval: boolean;
  thesisFile: {
    id: number;
    physicalPath: string;
  };
}
export interface ApprovalRequest {
  ids: number[];
}

export interface ApprovalResponse {
  success: boolean;
  approvedCount?: number;
}
