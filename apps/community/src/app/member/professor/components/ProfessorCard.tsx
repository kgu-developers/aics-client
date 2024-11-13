'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  avatarImage,
  card,
  cardContent,
  cardFooter,
  fallbackImage,
  professorContact,
  professorEmail,
  professorName,
  professorType,
} from '../styles/professorCard.css';

import type { Professor } from '../mocks/professor';

function ProfessorCard({ professor }: { professor: Professor }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={card}>
      {!imgError ? (
        <img
          src={professor.img}
          className={avatarImage}
          alt={professor.name}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={fallbackImage}>{professor.name}</div>
      )}

      <div className={cardContent}>
        <h3 className={professorName}>{professor.name}</h3>
        <p className={professorType}>{professor.type}</p>
      </div>

      <div className={cardFooter}>
        <p className={professorContact}>{professor.contact}</p>
        <p className={professorEmail}>{professor.email}</p>
      </div>
    </div>
  );
}

export { ProfessorCard };
