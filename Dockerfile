# syntax=docker/dockerfile:1  
FROM node:12-alpine  
RUN apk add --no-cache python2 g++ make  
RUN apk update && apk add git  
RUN git clone https://github.com/MarioSchenkewitz/Web-Prog-G1.git  
RUN npm install  
RUN npm install express  
RUN yarn install --production  
WORKDIR /Web-Prog-G1/Aufgabe3  
CMD ["node", "Web-Prog-G1/Aufgabe3/index.js"]  
EXPOSE 8080  