import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react'
import DirectionsEditorSection from '~/features/directions/components/DirectionsEditorSection'
import {
  DIRECTIONS_CATEGORY,
  DIRECTIONS_LABELS,
} from '~/features/directions/constants/directions'
import { EDIT_DIRECTIONS_ROUTE } from '~/features/directions/constants/path'
import { useUpsertDirections } from '~/features/directions/hooks/useUpsertDirections'
import { useAboutServiceGetApiV1AboutsSuspense } from '~/features/directions/services'

export const Route = createFileRoute(EDIT_DIRECTIONS_ROUTE)({
  component: DirectionsEditPage,
})

function DirectionsEditPage() {
  const router = useRouter()
  const { data } = useAboutServiceGetApiV1AboutsSuspense({
    category: DIRECTIONS_CATEGORY,
  })

  const [content, setContent] = useState(data.content)
  const { save, contextHolder } = useUpsertDirections()

  const handleSave = () => {
    save({ currentContent: data.content, nextContent: content ?? '' })
      .then(() => {
        router.history.back()
      })
      .catch(() => {})
  }

  return (
    <>
      {contextHolder}
      <section className="flex flex-col w-full gap-8">
        <h1 className="text-3xl font-bold">{DIRECTIONS_LABELS.title}</h1>
        <DirectionsEditorSection
          value={content}
          onChange={(newContent: string) => setContent(newContent)}
          onSave={handleSave}
        />
      </section>
    </>
  )
}

export default DirectionsEditPage
