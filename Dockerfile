FROM node:17.3 as build

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build

FROM nginx:1.21
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/conf.d/*.conf /etc/nginx/conf.d/
COPY ./nginx/*.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]