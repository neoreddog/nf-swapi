FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app
# install app dependencies
COPY package*.json .
RUN npm install

COPY ./ /app/

RUN npm run build

# add app
COPY . ./

FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf