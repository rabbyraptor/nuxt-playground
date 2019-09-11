FROM node

#Installing WEBPACK
RUN npm install -g nuxt

#Installing https driver
RUN apt-get update && apt-get install apt-transport-https unzip wget -y