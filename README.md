# Northflank StarWars Character fetcher

A basic web app that uses the **`swapi.dev`** API to get information about Star Wars characters.

Created as a demo app to showcase the Northflank platform and develop my React skills.

## Usage 

Clone this repository, navigate to project root. 

**Execute**
```
yarn install
yarn build
yarn run
```

The included Dockerfile uses the latest **nginx** build to create a lightweight Node.js Docker image.

```
docker build -t nf-swapi
docker run -p 80:80 nf-swapi
```

Navigate to **`localhost`** 
