import { style } from '@vanilla-extract/css';

export const OPACITY = {
  '25': '0.25',
  '75': '0.75',
} as const;

export const opacity25 = style({
  opacity: OPACITY[25],
});

export const opacity75 = style({
  opacity: OPACITY[75],
});
