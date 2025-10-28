import { style } from '@vanilla-extract/css';
import { vars } from '~/vars.css';

export const descriptionContainer = style({
	width: '100%',
});

export const tabButtons = style({
	display: 'flex',
	gap: vars.spacing.sm,
	margin: '0 auto',
	flexWrap: 'wrap',
});

export const descriptionCard = style({
	paddingTop: vars.spacing.lg,
	backgroundColor: vars.colors.sub,
	borderRadius: vars.radius.md,
});

export const descriptionHeader = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: vars.spacing.md,
});

export const descriptionTitle = style({
	fontSize: vars.font.size.lg,
	fontWeight: vars.font.weight.bold,
	margin: 0,
	color: vars.colors.black,
});

export const quillEditor = style({
	marginBottom: vars.spacing.md,
	backgroundColor: 'white',
	borderRadius: vars.radius.sm,
});

export const saveButtonWrapper = style({
	display: 'flex',
	justifyContent: 'flex-end',
});
