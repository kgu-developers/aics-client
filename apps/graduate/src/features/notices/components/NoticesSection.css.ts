import { style } from '@vanilla-extract/css';
import { vars } from '~/vars.css';

export const container = style({
	padding: vars.spacing.xl,
	maxWidth: '1200px',
	margin: '0 auto',
});

export const header = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: vars.spacing.lg,
});

export const title = style({
	fontSize: vars.font.size['3xl'],
	fontWeight: vars.font.weight.bold,
	margin: 0,
	color: vars.colors.black,
});

export const searchSection = style({
	marginBottom: vars.spacing.md,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

export const searchInput = style({
	width: '300px',
});

export const pinnedTitleLink = style({
	color: vars.colors.error,
	fontWeight: vars.font.weight.bold,
	cursor: 'pointer',
	textDecoration: 'none',
	':hover': {
		textDecoration: 'underline',
	},
});

export const normalTitleLink = style({
	color: vars.colors.main,
	fontWeight: vars.font.weight.normal,
	cursor: 'pointer',
	textDecoration: 'none',
	':hover': {
		color: vars.colors.mainDark,
		textDecoration: 'underline',
	},
});
