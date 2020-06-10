##############################################LATEX##############################################
FROM ubuntu:xenial
MAINTAINER Benedikt Lang <mail@blang.io>
#ENV DEBIAN_FRONTEND noninteractive

## Install full TexLive
RUN apt-get update -q && apt-get install -qy \
    texlive-full \
    python-pygments gnuplot \
    make git \
    && rm -rf /var/lib/apt/lists/*

ENV PATH="/usr/local/texlive/2020/bin/x86_64-linux:${PATH}"

############################################NODE.JS################################################
RUN apt-get update
RUN apt -y upgrade
RUN apt -y install curl apt-transport-https ca-certificates
# lsb-release dirmngr
RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install nodejs -y

CMD ["npm","start"]

## Create app directory
RUN mkdir -p /app/user/caratulas-ucsp-api
WORKDIR /app/user/caratulas-ucsp-api
#
## Install app dependencies
COPY package.json /app/user/caratulas-ucsp-api
RUN npm install
#
## Bundle app source
COPY . /app/user/caratulas-ucsp-api
# For use ssh on docker
ADD ./.profile.d /app/.profile.d
# network
EXPOSE 8080
#
CMD ["npm", "start"]
# CMD PORT=$PORT node run start
