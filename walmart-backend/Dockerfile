FROM node:14.15 as build-backend

WORKDIR /walmart-backend
COPY package*.json ./
RUN npm run build
COPY . .

COPY --from=build-backend /walmart-backend/dist ./dist

CMD ["node", "dist/main"]