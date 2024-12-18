import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';
import { mergeConfig } from 'vite';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      build: {
        rollupOptions: {
          external: ['@emotion/react/jsx-runtime'],
        },
      },
    });
  },
};
export default config;
