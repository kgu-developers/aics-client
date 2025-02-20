import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: [
    '../src/stories**/*.mdx',
    '../src/components/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(
      vanillaExtractPlugin({
        identifiers: ({ hash }) => `_${hash}`,
      }),
    );
    return config;
  },
};
export default config;
