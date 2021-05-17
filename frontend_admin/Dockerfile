FROM node:lts-alpine as build-stage
COPY package*.json ./

RUN yarn install
COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default /etc/nginx/sites-enabled/default

COPY --from=build-stage ./build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
