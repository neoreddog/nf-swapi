FROM openjdk:7
COPY . /usr/src/nf-swapi
COPY src/index.js /usr/src/nf-swapi/index.js
WORKDIR /usr/src/nf-swapi
RUN javac ./src/index.js
CMD java /usr/src/nf-swapi/index
