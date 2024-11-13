import { ProfessorCard } from './components/ProfessorCard';

import { professorList } from './styles/page.css';

import { PROFESSORS } from './mocks/professor';

export default function Page(): JSX.Element {
  return (
    <div className={professorList}>
      {PROFESSORS.map((professor) => (
        <ProfessorCard
          key={`professor-${professor.id}`}
          professor={professor}
        />
      ))}
    </div>
  );
}
