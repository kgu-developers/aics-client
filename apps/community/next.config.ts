import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import type { NextConfig } from 'next'

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `_${hash}`,
})
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'www.kyonggi.ac.kr',
      },
      {
        protocol: 'https',
        hostname: 'kutis.kyonggi.ac.kr',
        pathname: '/webkutis/TransferImageStreamHJ.do',
      },
      {
        protocol: 'https', //더미 데이터 허용을 위한 임시방편
        hostname: 'image.com',
      },
    ],
  },
  transpilePackages: [
    '@aics-client/design-system',
    '@aics-client/design-system/styles',
  ],
  experimental: {
    reactCompiler: true,
  },
}

export default withVanillaExtract(nextConfig)
