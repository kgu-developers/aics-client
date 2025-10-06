import type { Preview } from '@storybook/react'
import React from 'react'
import { themeClass } from '../src/styles'

const fontLink = document.createElement('link')
fontLink.href =
  'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap'
fontLink.rel = 'stylesheet'
document.head.appendChild(fontLink)

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
      <div
        className={themeClass}
        style={{ fontFamily: 'Nunito Sans, system-ui, sans-serif' }}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
