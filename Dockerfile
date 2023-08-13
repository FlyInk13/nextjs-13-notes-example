FROM node:lts-alpine

# for build
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

# for run
ENV DATA_PATH=/data/
ENV NODE_ENV=production

VOLUME /data
EXPOSE 3000

CMD [ "npm", "run", "start" ]
