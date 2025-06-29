FROM node:20.11.0-alpine3.19 AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=@aics-client/community --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable
RUN pnpm install

COPY --from=builder /app/out/full/ .
RUN pnpm dlx turbo run build --filter=@aics-client/community

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/community/next.config.ts .
COPY --from=installer /app/apps/community/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/community/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/community/.next/static ./apps/community/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/community/public ./apps/community/public

CMD node apps/community/server.js