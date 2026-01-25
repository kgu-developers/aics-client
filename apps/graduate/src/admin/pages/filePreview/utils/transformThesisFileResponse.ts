import { FileItem } from '../model/filePreview';

import { ThesisFileResponse } from '~/admin/shared/types/file';

export default function transformThesisResponse(
  data: ThesisFileResponse,
): FileItem {
  return {
    ...data,
    graduationUserid: data.id,
    file: {
      fileId: data.thesisFile.id,
      physicalPath: data.thesisFile.physicalPath,
    },
  };
}
