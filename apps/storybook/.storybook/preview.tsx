import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalStyle } from '@daengle/design-system';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#EAEEF2' },
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#262626' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <GlobalStyle>
        <div style={{ width: '100vw', maxWidth: '480px', padding: '0 18px', margin: '0 auto' }}>
          <Story />
        </div>
      </GlobalStyle>
    ),
  ],
};

export default preview;
