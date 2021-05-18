FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default /etc/nginx/sites-enabled/default

COPY --from=build-stage ./app/dist /usr/share/nginx/html/admin
CMD ["nginx", "-g", "daemon off;"]
