FROM node:alpine-lates

WORKDIR app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# STAGE 2: serve react app using Nginx

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx","-g", "daemon off;"]


