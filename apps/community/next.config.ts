import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `_${hash}`
});
const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default withVanillaExtract(nextConfig);
