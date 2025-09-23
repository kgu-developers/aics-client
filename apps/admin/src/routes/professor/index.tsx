import { createFileRoute } from '@tanstack/react-router'
import { ProfessorCreator } from '~/features/professor/components/ProfessorCreator'
import ProfessorTable from '~/features/professor/components/ProfessorTable'

export const Route = createFileRoute('/professor/')({
  component: ProfessorPage,
})

function ProfessorPage() {
  return (
    <section>
      <ProfessorCreator />
      <ProfessorTable />
    </section>
  )
}

export default ProfessorPage
