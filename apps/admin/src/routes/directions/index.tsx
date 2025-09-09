import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from 'antd'

import { useAboutServiceGetApiV1AboutsSuspense } from '~/features/directions/services'
import { PATH_DIRECTIONS } from '~/features/directions/constants/path'
import DirectionsContent from '~/features/directions/components/directionsContent'
import { DIRECTIONS_ROUTE } from '~/features/directions/constants/path'
import {
  DIRECTIONS_CATEGORY,
  DIRECTIONS_LABELS,
  isDirectionsEmpty,
} from '~/features/directions/constants/directions'

export const Route = createFileRoute(DIRECTIONS_ROUTE)({
  component: DirectionsPage,
})

function DirectionsPage() {
  const { data } = useAboutServiceGetApiV1AboutsSuspense({
    category: DIRECTIONS_CATEGORY,
  })

  const empty = isDirectionsEmpty(data.content)

  return (
    <section className="flex flex-col w-full gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold ">{DIRECTIONS_LABELS.title}</h1>
        <Link to={PATH_DIRECTIONS.EDIT_DIRECTIONS} className="self-end">
          {empty ? (
            <Button type="primary">{DIRECTIONS_LABELS.create}</Button>
          ) : (
            <Button type="primary">{DIRECTIONS_LABELS.edit}</Button>
          )}
        </Link>
      </div>
      <DirectionsContent content={data.content} />
    </section>
  )
}

export default DirectionsPage
