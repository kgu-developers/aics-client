import { style } from '@vanilla-extract/css';

export const opacity = {
  '25': '0.25',
  '75': '0.75',
};

export const opacity25 = style({
  opacity: opacity[25],
});

export const opacity75 = style({
  opacity: opacity[75],
});
