import type { Preview } from '@storybook/react';
import React from 'react';
import { modernNormalizeClass, themeClass } from '../src/styles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${modernNormalizeClass} ${themeClass}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
