export interface FileItem {
  graduationUserid: number;
  scheduleId: number;
  approval: boolean;
  file: {
    fileId: number;
    physicalPath: string;
  };
}
