import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Italic from '@tiptap/extension-italic'
import ListItem from '@tiptap/extension-list-item'
import ListKeyMap from '@tiptap/extension-list-keymap'
import Paragraph from '@tiptap/extension-paragraph'
import Strike from '@tiptap/extension-strike'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import ImageResize from 'tiptap-extension-resize-image'

import {
  CustomBulletListConfigure,
  CustomBulletListExtend,
  CustomHeading,
  CustomImageConfigure,
  CustomLinkConfigure,
  CustomLinkExtend,
  CustomOrderedListConfigure,
  CustomTextAlignConfigure,
  TabIndentExtension,
} from '../../utils/custom-extensions.ts'

import MenuBar from '../../components/menu-bar/menu-bar.tsx'

interface EditorProps {
  editorContent: string
  onChange: (content: string) => void
}

export default function Editor({ editorContent, onChange }: EditorProps) {
  const editor = useEditor({
    extensions: [
      Document,
      Text,
      Bold,
      Italic,
      Strike,
      Paragraph,
      CustomHeading,
      HorizontalRule,
      ImageResize,
      ListItem,
      ListKeyMap,
      CustomBulletListConfigure,
      CustomBulletListExtend,
      CustomOrderedListConfigure,
      TabIndentExtension,
      CustomImageConfigure,
      CustomTextAlignConfigure,
      CustomLinkConfigure,
      CustomLinkExtend,
    ],

    immediatelyRender: false,

    editorProps: {
      attributes: {
        class:
          'appearance-none h-[500px] overflow-auto p-6 rounded w-full text-sm leading-tight focus:outline-none focus:shadow-outline',
      },
    },

    content: editorContent,

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="w-full border border-gray-300 rounded-lg">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
