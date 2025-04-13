import type { Editor } from '@tiptap/react';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  ImagePlus,
  Italic,
  Link,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Strikethrough,
} from 'lucide-react';
import type { ReactNode } from 'react';

import { MenuButton } from './menu-button.tsx';

function MenuBarWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-start py-3 w-full overflow-x-auto border-b border-gray-300">
      {children}
    </div>
  );
}

function MenuButtonsWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-1 px-3 border-r border-gray-300">
      {children}
    </div>
  );
}

export default function MenuBar({ editor }: { editor: Editor }) {
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    try {
      for (const file of Array.from(files)) {
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => reject(new Error('이미지 업로드 실패'));
          reader.readAsDataURL(file);
        });

        editor.chain().focus().setImage({ src: base64 }).run();
      }
    } catch (e) {
      console.error(e);
    } finally {
      event.target.value = '';
    }
  };

  const handleSetLink = () => {
    try {
      const currentLink = editor.getAttributes('link').href;
      let url = window.prompt('URL을 입력하세요', currentLink)?.trim();

      if (!url) {
        if (editor.isActive('link')) {
          editor.chain().focus().unsetLink().run();
        }
        return;
      }

      if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
      }

      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MenuBarWrapper>
      <MenuButtonsWrapper>
        <MenuButton
          icon={<Bold size={20} />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          disabled={!editor.can().chain().focus().toggleBold().run()}
        />
        <MenuButton
          icon={<Italic size={20} />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
        />
        <MenuButton
          icon={<Strikethrough size={20} />}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
        />
      </MenuButtonsWrapper>

      <MenuButtonsWrapper>
        <MenuButton
          icon={<Pilcrow size={20} />}
          onClick={() => editor.chain().focus().setParagraph().run()}
          isActive={editor.isActive('paragraph')}
        />
        <MenuButton
          icon={<Heading1 size={20} />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          isActive={editor.isActive('heading', { level: 1 })}
        />
        <MenuButton
          icon={<Heading2 size={20} />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive('heading', { level: 2 })}
        />
        <MenuButton
          icon={<Heading3 size={20} />}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor.isActive('heading', { level: 3 })}
        />
        <MenuButton
          icon={<Minus size={20} />}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          isActive={editor.isActive('horizontal')}
        />
      </MenuButtonsWrapper>

      <MenuButtonsWrapper>
        <MenuButton
          icon={<List size={20} />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
        />
        <MenuButton
          icon={<ListOrdered size={20} />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
        />
        <MenuButton
          icon={<AlignLeft size={20} />}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
        />
        <MenuButton
          icon={<AlignCenter size={20} />}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
        />
        <MenuButton
          icon={<AlignRight size={20} />}
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
        />
      </MenuButtonsWrapper>

      <MenuButtonsWrapper>
        <input
          type="file"
          accept="image/*"
          multiple
          id="image-upload"
          className="size-0"
          onChange={handleImageUpload}
        />
        <MenuButton
          icon={<ImagePlus size={20} />}
          onClick={() => document.getElementById('image-upload')?.click()}
          isActive={editor.isActive('image')}
        />
        <MenuButton
          icon={<Link size={20} />}
          onClick={handleSetLink}
          isActive={editor.isActive('link')}
        />
      </MenuButtonsWrapper>
    </MenuBarWrapper>
  );
}
