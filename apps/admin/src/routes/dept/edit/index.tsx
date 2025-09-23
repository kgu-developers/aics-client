import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react'
import DeptIntroEditorSection from '~/features/dept/components/DeptIntroEditorSection'
import { DEPT_EDIT_ROUTE } from '~/features/dept/constants'
import {
  DEPT_INTRO_CATEGORY,
  DEPT_INTRO_LABELS,
} from '~/features/dept/constants/deptIntro'
import { useUpsertDeptIntro } from '~/features/dept/hooks/useUpsertDeptIntro'
import { useAboutServiceGetApiV1AboutsSuspense } from '~/features/dept/services'

export const Route = createFileRoute(DEPT_EDIT_ROUTE)({
  component: DeptEditPage,
})

function DeptEditPage() {
  const router = useRouter()
  const { data } = useAboutServiceGetApiV1AboutsSuspense({
    category: DEPT_INTRO_CATEGORY,
  })
  const [content, setContent] = useState(data.content)
  const { save, contextHolder } = useUpsertDeptIntro({
    onSuccess: () => {
      router.history.back()
    },
  })

  const handleSave = () => {
    save({ currentContent: data.content, nextContent: content ?? '' })
  }

  return (
    <>
      {contextHolder}
      <section className="flex flex-col w-full gap-8">
        <h1 className="text-3xl font-bold">{DEPT_INTRO_LABELS.title}</h1>
        <DeptIntroEditorSection
          value={content}
          onChange={(newContent) => setContent(newContent)}
          onSave={handleSave}
        />
      </section>
    </>
  )
}

export default DeptEditPage
