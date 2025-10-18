import { style } from '@vanilla-extract/css'
import { vars } from '~/vars.css'

export const tableWrap = style({
  overflowX: 'auto',
})

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: vars.font.size.sm,
  tableLayout: 'fixed',
})

export const th = style({
  textAlign: 'center',
  padding: vars.spacing.md,                 
  background: vars.colors.sub,             
  color: vars.colors.subText,
  borderBottom: `1px solid ${vars.colors.border}`,
  fontWeight: vars.font.weight.medium,
})

export const thCheckbox = style({ width: '30px' })
export const thNo = style({ width: '40px' })
export const thStudentId = style({ width: '120px' })
export const thName = style({ width: '100px' })
export const thStatus = style({ width: '100px' })
export const thApproved = style({ width: '100px' })

export const tdName = style({
  textAlign: 'left',
})

export const td = style({
  padding: vars.spacing.md,            
  color: vars.colors.subText,
  borderTop: `1px solid ${vars.colors.border}`,
  textAlign: 'center',
})

export const row = style({
  selectors: {
    '&:hover': { background: vars.colors.mainLightHover }, 
  },
})

export const selectedRow = style({
  background: `${vars.colors.mainXLight} !important`, 
})

export const nameLink = style({
  color: vars.colors.subText,
  textDecoration: 'none',
  selectors: {
    '&:hover': { textDecoration: 'underline' },
  },
})

export const checkbox = style({
  width: 16,
  height: 16,
})
