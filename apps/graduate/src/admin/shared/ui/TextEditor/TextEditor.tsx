import { Button } from 'antd';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

import * as style from './TextEditor.css';
import { TextEditorProps } from './types';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    ['link'],
    ['clean'],
  ],
};

export default function TextEditor({
  title,
  value,
  onChange,
  onSave,
  isSaved = true,
  onFocus,
  className,
}: TextEditorProps) {
  return (
    <div className={className || style.editorCard}>
      <div className={style.editorHeader}>
        <h3 className={style.editorTitle}>{title}</h3>
      </div>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        modules={modules}
        className={style.quillEditor}
      />
      <div className={style.saveButtonWrapper}>
        <Button disabled={isSaved} type='primary' onClick={onSave}>
          {isSaved ? '저장됨' : '저장'}
        </Button>
      </div>
    </div>
  );
}
