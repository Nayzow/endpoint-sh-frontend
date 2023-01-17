FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

EXPOSE 4200

CMD ["npm", "start"]
