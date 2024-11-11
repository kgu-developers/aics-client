import { style } from '@vanilla-extract/css';

const headerWrapper = style({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  transition: 'padding 0.3s',
});

const headerWrapperScrolled = style({
  padding: '1rem 0',
});

const header = style({
  padding: '1.5rem 1rem',
  backgroundColor: 'white',
  borderRadius: '1rem',
  transition: 'padding 0.3s, box-shadow 0.3s',
});

const headerScrolled = style({
  padding: '1rem',
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
});

export { headerWrapper, headerWrapperScrolled, header, headerScrolled };
