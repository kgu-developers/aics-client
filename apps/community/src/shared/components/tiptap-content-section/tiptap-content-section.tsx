import DOMPurify from 'isomorphic-dompurify'

import * as styles from '~/shared/components/tiptap-content-section/tiptap-content-section.css'

function TiptapContentSection({
  content,
}: {
  content: string
}) {
  return (
    <section
      className={styles.information}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    />
  )
}

export { TiptapContentSection }
