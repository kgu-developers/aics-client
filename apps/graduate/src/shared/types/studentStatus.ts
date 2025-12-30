export type CertificateStatus = {
  type: 'CERTIFICATE';
  certificate: {
    fileId: number | null;
    submitted: boolean;
    approval: boolean;
    createdAt: string | null;
  };
};

export type ThesisStatus = {
  type: 'THESIS';
  midThesis: {
    fileId: number | null;
    submitted: boolean;
    approval: boolean;
    createdAt: string | null;
  };
  finalThesis: {
    fileId: number | null;
    submitted: boolean;
    approval: boolean;
    createdAt: string | null;
  };
};

export type StudentStatus = CertificateStatus | ThesisStatus;
