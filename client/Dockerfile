FROM mhart/alpine-node

WORKDIR /client

EXPOSE 3000

ADD /client /client
ADD /shared /shared

RUN yarn --silent

RUN yarn run build

CMD yarn run start