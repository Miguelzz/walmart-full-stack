FROM node:14-alpine as development

WORKDIR /walmart-backend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --only=production

##COPY --from=development /walmart-backend/dist ./dist

CMD ["node", "dist/main"]