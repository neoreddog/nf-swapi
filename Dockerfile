FROM openjdk:7
COPY . /usr/src/first-docker-app
COPY src/Main.java /usr/src/first-docker-app/Main.java
WORKDIR /usr/src/first-docker-app
RUN javac ./src/Main.java
CMD java /usr/src/first-docker-app/Main
