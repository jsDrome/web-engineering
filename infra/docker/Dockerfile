FROM node:8
RUN mkdir -p /opt/app
WORKDIR /opt/app

ADD build /opt/app/build
ADD src /opt/app/src
ADD .babelrc /opt/app/.babelrc
ADD package.json /opt/app/package.json
ADD package-lock.json /opt/app/package-lock.json

RUN npm i
RUN npm run build:client:prod
RUN npm run build:server:prod

CMD [ "npm", "start" ]
