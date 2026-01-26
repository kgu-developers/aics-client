import { style } from '@vanilla-extract/css';

import { vars } from '~/vars.css';

export const container = style({
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  maxWidth: '768px',
  margin: 'auto',
  gap: vars.spacing.xl,
  paddingRight: vars.spacing.lg,
  paddingLeft: vars.spacing.lg,
  boxSizing: 'border-box',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const iconWrapper = style({
  width: '80px',
  height: '80px',
  backgroundColor: '#E6F0FF',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#006AE4',
  marginBottom: '24px',
});

export const title = style({
  fontSize: '24px',
  fontVariationSettings: `'wght' ${vars.font.weight.semibold}`,
  color: '#111827',
  marginBottom: '12px',
  letterSpacing: '-0.02em',
});

export const description = style({
  fontSize: '16px',
  color: '#6B7280',
  lineHeight: '1.6',
  marginBottom: '32px',
});

export const inputSection = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '32px',
  textAlign: 'left',
});

export const label = style({
  fontSize: '14px',
  fontWeight: 600,
  color: '#374151',
  marginLeft: '4px',
});

export const input = style({
  width: '100%',
  height: '52px',
  padding: '0 16px',
  borderRadius: '12px',
  border: '1px solid #E5E7EB',
  fontSize: '15px',
  backgroundColor: '#F9FAFB',
  transition: 'all 0.2s ease',
  boxSizing: 'border-box',

  ':focus': {
    outline: 'none',
    borderColor: '#006AE4',
    backgroundColor: '#FFFFFF',
  },
});

export const button = style({
  width: '100%',
  height: '56px',
  backgroundColor: '#006AE4',
  color: '#FFFFFF',
  borderRadius: '16px',
  fontSize: '16px',
  fontWeight: 700,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#0054B3',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 106, 228, 0.3)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
});
