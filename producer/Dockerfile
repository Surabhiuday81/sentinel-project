FROM node:18-alpine
WORKDIR /app
RUN npm install ioredis
COPY producer.js .
USER node
CMD ["node", "producer.js"]