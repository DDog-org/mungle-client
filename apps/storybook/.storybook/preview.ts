import type { Preview } from '@storybook/react';

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
};

export default preview;
