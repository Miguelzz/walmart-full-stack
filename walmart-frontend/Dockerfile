FROM node:latest as build-frontend

WORKDIR /walmart-frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --prod


FROM nginx:alpine
COPY --from=build-frontend /walmart-frontend/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80