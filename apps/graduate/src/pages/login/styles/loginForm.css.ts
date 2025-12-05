import { style } from '@vanilla-extract/css';

export const form = style({
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const input = style({
  boxSizing: 'border-box',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
  fontSize: '14px',

  ':focus': {
    outline: 'none',
    borderColor: '#4A90E2',
  },
});

export const errorMessage = style({
  color: 'red',
  fontSize: '12px',
  margin: '4px 0 0 0',
});

export const submitButton = style({
  width: '300px',
  padding: '8px',
  borderRadius: '4px',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#4A90E2',
  color: 'white',
  fontSize: '14px',
  fontWeight: '500',
  transition: 'all 0.2s ease-in-out',

  ':hover': {
    backgroundColor: '#357ABD',
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
    backgroundColor: '#4A90E2',
  },
});
