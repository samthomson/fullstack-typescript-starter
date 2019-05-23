FROM mhart/alpine-node

WORKDIR /server

EXPOSE 3100

ADD /server /server
ADD /shared /shared

RUN yarn --silent

RUN yarn build

CMD yarn start