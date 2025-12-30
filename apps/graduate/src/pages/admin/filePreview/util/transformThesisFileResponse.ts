import { ThesisFileResponse } from '~/shared/types';

import { FileItem } from '../model/filePreview';

export function transformThesisResponse(data: ThesisFileResponse): FileItem {
  return {
    ...data,
    graduationUserid: data.id,
    file: {
      fileId: data.thesisFile.id,
      physicalPath: data.thesisFile.physicalPath,
    },
  };
}
