FROM ingomuellernet/texlive:2019

RUN apt update

RUN apt install curl -y

RUN curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh

RUN bash nodesource_setup.sh

RUN apt install nodejs -y


RUN mkdir -p /app/user/caratulas-ucsp-api

WORKDIR /app/user/caratulas-ucsp-api

COPY . /app/user/caratulas-ucsp-api

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]
