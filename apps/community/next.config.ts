import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `_${hash}`,
});
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'picsum.photos' }],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default withVanillaExtract(nextConfig);
