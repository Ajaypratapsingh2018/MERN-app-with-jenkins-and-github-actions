FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

# Clean up problematic native bindings
RUN rm -rf node_modules package-lock.json && npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
