import { style } from '@vanilla-extract/css';

export const card = style({
  width: '100%',
  backgroundColor: '#fff',
  border: '1px solid',
  borderColor: '#e5e7eb',
  borderRadius: 12,
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  paddingTop: 12,
});

export const avatarImage = style({
  marginTop: '0.375rem',
  width: '8rem',
  height: '8rem',
  borderRadius: 9999,
  objectFit: 'cover',
});

export const fallbackImage = style({
  marginTop: '0.375rem',
  width: '8rem',
  height: '8rem',
  borderRadius: 9999,
  backgroundColor: '#e5e7eb',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '1rem',
  color: '#000',
});

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const professorName = style({
  fontWeight: 600,
  letterSpacing: '-0.025em',
  margin: 0,
});

export const professorType = style({
  margin: 0,
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '1.25rem',
  color: '#6b7280',
});

export const cardFooter = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  paddingBottom: 16,
});

export const professorContact = style({
  margin: 0,
});

export const professorEmail = style({
  margin: 0,
});
