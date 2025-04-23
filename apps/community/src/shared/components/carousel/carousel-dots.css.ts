import { style } from '@vanilla-extract/css'

const dots = style({
  display: 'flex',
  gap: '4px',
  borderRadius: '12px',
  padding: '0.5rem',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
})

const dot = style({
  cursor: 'pointer',
  border: '0px',
  padding: '0px',
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
})

const dotActive = style({
  backgroundColor: 'rgba(255, 255, 255, 1)',
})

export { dots, dot, dotActive }
