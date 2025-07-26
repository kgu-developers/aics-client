FROM node:20-alpine AS base

# 1. Builder (prune 없이 전체 프로젝트 사용)
FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Turbo 설치
RUN npm install -g turbo

# 전체 프로젝트 복사
COPY . .

# pnpm 설정 및 의존성 설치
RUN corepack enable pnpm
RUN pnpm install --no-frozen-lockfile

# Admin 앱 먼저 빌드
RUN turbo build --filter=@aics-client/admin
# Admin 빌드 결과를 Community public에 복사
RUN cp -r apps/admin/dist/* apps/community/public/admin/
# Community 앱 빌드
RUN turbo build --filter=@aics-client/community

# 2. Runner
FROM base AS runner
WORKDIR /app

# 사용자 생성
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Next.js 설정 파일 복사
COPY --from=builder /app/apps/community/next.config.ts .
COPY --from=builder /app/apps/community/package.json .

# Next.js standalone 결과물 복사
COPY --from=builder --chown=nextjs:nodejs /app/apps/community/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/community/.next/static ./apps/community/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/community/public ./apps/community/public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "apps/community/server.js"]