import { createFileRoute } from '@tanstack/react-router'
import { ClubTable } from '~/features/club/components'
import { CLUB_ROUTE } from '~/features/club/constants'

export const Route = createFileRoute(CLUB_ROUTE)({
  component: ClubPage,
})

function ClubPage() {
  return (
    <section className="py-10 px-16">
      <ClubTable />
    </section>
  )
}

export default ClubPage
