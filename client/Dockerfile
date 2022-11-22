FROM node:alpine as node

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node  /usr/src/app/dist/client /usr/share/nginx/html
