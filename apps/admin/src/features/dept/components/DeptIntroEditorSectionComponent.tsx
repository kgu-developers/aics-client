import { Editor } from '@aics-client/tiptap';
import { Button } from 'antd';
import type { ComponentProps } from 'react';

import type { DeptIntroContent as DeptIntroContentType } from '~/features/dept/types';

type EditorOnChange = NonNullable<ComponentProps<typeof Editor>['onChange']>;
type EditorContent = ComponentProps<typeof Editor>['editorContent'];

export default function DeptIntroEditorSection({
  value,
  onChange,
  onSave,
}: {
  value: DeptIntroContentType;
  onChange: EditorOnChange;
  onSave: () => void;
}) {
  return (
    <>
      <section className='border-y py-8 border-gray-200'>
        <Editor
          editorContent={(value ?? '') as EditorContent}
          onChange={onChange}
        />
      </section>
      <Button type='primary' className='self-end' onClick={onSave}>
        저장하기
      </Button>
    </>
  );
}
