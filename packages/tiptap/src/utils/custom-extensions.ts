import { Extension } from '@tiptap/core';
import BulletList from '@tiptap/extension-bullet-list';
import Heading from '@tiptap/extension-heading';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import OrderedList from '@tiptap/extension-ordered-list';
import TextAlign from '@tiptap/extension-text-align';

const CustomHeading = Heading.extend({
  levels: [1, 2, 3],
  addAttributes() {
    return {
      level: {
        parseHTML: (element) => Number(element.tagName.charAt(1)),
      },
      class: {
        default: null,
        rendered: false,
        parseHTML: (element) => element.getAttribute('class'),
      },
    };
  },
  renderHTML({ node, HTMLAttributes }) {
    const level = Number.parseInt(node.attrs.level);
    const sizeClass = {
      1: 'text-2xl font-bold',
      2: 'text-xl font-bold',
      3: 'text-lg font-semibold',
    }[level];

    return [`h${level}`, { ...HTMLAttributes, class: sizeClass }, 0];
  },
});

const CustomBulletListExtend = BulletList.extend({
  addAttributes() {
    return {
      class: {
        default: 'list-disc',
        parseHTML: (element) => element.getAttribute('class'),
      },
    };
  },
});

const CustomBulletListConfigure = BulletList.configure({
  keepAttributes: true,
  keepMarks: true,
});

const CustomOrderedListConfigure = OrderedList.extend({
  addAttributes() {
    return {
      class: {
        default: 'list-decimal',
        parseHTML: (element) => element.getAttribute('class'),
      },
    };
  },
});

const CustomTextAlignConfigure = TextAlign.configure({
  types: ['heading', 'paragraph'],
});

const CustomImageConfigure = Image.configure({
  allowBase64: true,
});

const CustomLinkConfigure = Link.configure({
  openOnClick: false,
  autolink: true,
  defaultProtocol: 'https',
  protocols: ['http', 'https'],
  isAllowedUri: (url, ctx) => {
    try {
      const parsedUrl = url.includes(':')
        ? new URL(url)
        : new URL(`${ctx.defaultProtocol}://${url}`);

      if (!ctx.defaultValidate(parsedUrl.href)) {
        return false;
      }

      const disallowedProtocols = ['ftp', 'file', 'mailto'];
      const protocol = parsedUrl.protocol.replace(':', '');

      if (disallowedProtocols.includes(protocol)) {
        return false;
      }

      const allowedProtocols = ctx.protocols.map((p) =>
        typeof p === 'string' ? p : p.scheme,
      );

      if (!allowedProtocols.includes(protocol)) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  },
});

const CustomLinkExtend = Link.extend({
  renderHTML({ HTMLAttributes }) {
    return [
      'a',
      {
        ...HTMLAttributes,
        class: 'text-gray-800 underline cursor-pointer',
      },
    ];
  },
});

const TabIndentExtension = Extension.create({
  name: 'tabIndent',

  addKeyboardShortcuts() {
    return {
      Tab: ({ editor }) => {
        if (editor.isActive('bulletList') || editor.isActive('orderedList')) {
          return editor.chain().focus().sinkListItem('listItem').run();
        }

        return false;
      },
      'Shift-Tab': ({ editor }) => {
        if (editor.isActive('bulletList') || editor.isActive('orderedList')) {
          return editor.chain().focus().liftListItem('listItem').run();
        }

        return false;
      },
    };
  },
});

export {
  CustomHeading,
  CustomBulletListConfigure,
  CustomBulletListExtend,
  CustomOrderedListConfigure,
  CustomTextAlignConfigure,
  CustomImageConfigure,
  CustomLinkConfigure,
  CustomLinkExtend,
  TabIndentExtension,
};
