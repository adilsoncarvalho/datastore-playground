FROM node:latest

LABEL maintainer "Adilson Carvalho <lc.adilson@gmail.com>"

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN npm install --silent

EXPOSE 5000

CMD [ "bash" ]
