import { useState } from 'react';

import { Header } from '~/shared/components';
import { TextEditor } from '~/shared/components/TextEditor';

import { RULES_MOCK_CONTENT } from '../mock/rules';
import * as style from '../styles/Rules.css';

export default function Rules() {
  const [content, setContent] = useState<string>(RULES_MOCK_CONTENT);
  const [isSaved, setIsSaved] = useState<boolean>(true);

  const handleSave = () => {
    setIsSaved(true);
    window.alert('내용이 저장되었습니다!');
  };

  return (
    <div className={style.container}>
      <Header title='안내 및 내규' />
      <TextEditor
        title=''
        value={content}
        onChange={setContent}
        onSave={handleSave}
        isSaved={isSaved}
        onFocus={() => setIsSaved(false)}
      />
    </div>
  );
}
