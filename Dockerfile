FROM node:alpine

WORKDIR /app
ADD . .
RUN npm i

EXPOSE 16111

CMD ["node", "main.js"]