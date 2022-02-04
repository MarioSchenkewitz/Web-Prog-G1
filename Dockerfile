# syntax=docker/dockerfile:1  
FROM node:12-alpine  
ENV NODE_ENV=production
RUN apk update && apk add git  
RUN git clone https://github.com/MarioSchenkewitz/Web-Prog-G1.git  
WORKDIR /Web-Prog-G1/Aufgabe3
RUN npm install --production
RUN yarn install --production  
CMD ["node", "./index.js"]  
EXPOSE 8080  