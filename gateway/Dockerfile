FROM node:lts-alpine

WORKDIR /app

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.8.0/wait /wait
RUN chmod +x /wait

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8080

CMD npm run start