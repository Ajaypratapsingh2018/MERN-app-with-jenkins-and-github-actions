FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 5050

CMD [ "npm" "start" ]