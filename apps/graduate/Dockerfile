FROM node:20-alpine AS builder

WORKDIR /app

# pnpm 사용을 위해 corepack 활성화
RUN corepack enable

# 모노레포 루트 기준으로 의존성 설치 및 빌드
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY apps ./apps
COPY configs ./configs
COPY packages ./packages

# 워크스페이스 전체 의존성 설치
RUN pnpm install --frozen-lockfile

# graduate 앱만 빌드
RUN pnpm --filter @aics-client/graduate build


FROM nginx:alpine

# graduate 전용 nginx 설정 사용
COPY apps/graduate/nginx.conf /etc/nginx/conf.d/default.conf

# 빌드 결과를 nginx 기본 문서 루트로 복사
COPY --from=builder /app/apps/graduate/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

