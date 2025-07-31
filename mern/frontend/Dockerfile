FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

EXPOSE 5173

CMD ["npm", "run", "dev"]