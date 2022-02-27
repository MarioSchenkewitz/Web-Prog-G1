# syntax=docker/dockerfile:1  
FROM node:17-alpine  
ENV NODE_ENV=production
COPY . .  
RUN yarn install --production  
CMD ["node", "src/index.js"]
EXPOSE 8080  

