export type Professor = {
  id: number;
  name: string;
};

export const PROFESSORS: Professor[] = [
  { id: 1, name: '윤익준' },
  { id: 2, name: '이은정' },
  { id: 3, name: '김남기' },
  { id: 4, name: '권준희' },
];

export const getProfessorById = (id: number) =>
  PROFESSORS.find(p => p.id === id) ?? null;
