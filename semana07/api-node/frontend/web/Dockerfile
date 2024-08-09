# Build
FROM node:16-alpine as etapa1
WORKDIR /react
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install esbuild@0.21.5
RUN npm run build


# Package
FROM nginx:alpine
COPY --from=etapa1 /react/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]