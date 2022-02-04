# syntax=docker/dockerfile:1  
FROM node:17-alpine  
ENV NODE_ENV=production
RUN apk update && apk add git  
RUN git clone https://github.com/MarioSchenkewitz/Web-Prog-G1.git  
WORKDIR /Web-Prog-G1/Aufgabe3
RUN yarn install --production  
CMD ["node", "./index.js"]  
EXPOSE 8080  