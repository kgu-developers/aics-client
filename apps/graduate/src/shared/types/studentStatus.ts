export type CertificateStatus = {
  type: 'CERTIFICATE';
  id: number | null;
  submitted: boolean;
  approval: boolean;
  createdAt: string | null;
};

export type ThesisStatus = {
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

export type StudentStatus = CertificateStatus | ThesisStatus;
