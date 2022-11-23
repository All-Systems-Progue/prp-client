FROM node:16-alpine AS build-stage

WORKDIR /opt/app
ENV PATH "$PATH:/opt/yarn/bin"
COPY . .
RUN yarn && yarn build

FROM nginx:1.23-alpine

COPY --from=build-stage /opt/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80