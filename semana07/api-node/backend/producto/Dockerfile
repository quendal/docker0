FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3002

ENTRYPOINT [ "node" ]

CMD ["index.js"]
