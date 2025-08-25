import { createFileRoute } from '@tanstack/react-router'
import ClubTable from '~/features/club/components/club-table'

export const Route = createFileRoute('/club/')({
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
