## BUILDER stage
FROM node:20-alpine as BUILDER

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

## RUNNER stage
FROM nginx:alpine

WORKDIR /app

copy --from=BUILDER /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
