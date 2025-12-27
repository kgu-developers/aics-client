export type CertificateStatus = {
  type: 'CERTIFICATE';
  certificate: {
    submitted: boolean;
    approval: boolean;
    createdAt: string | null;
  };
};

export type ThesisStatus = {
  type: 'THESIS';
  midThesis: {
    submitted: boolean;
    approval: boolean;
    createdAt: string | null;
  };
  finalThesis: {
    submitted: boolean;
    approval: boolean;
    createdAt: string | null;
  };
};

export type StudentStatus = CertificateStatus | ThesisStatus;
