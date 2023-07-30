FROM node:16.20
RUN apt-get -y update && apt-get -y install git
WORKDIR /app
COPY ./ .
EXPOSE 8080
RUN yarn install --check-files

COPY *.sh /scripts/

RUN chmod a+x /scripts/*.sh