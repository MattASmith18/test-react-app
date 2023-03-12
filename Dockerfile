FROM node

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

COPY --from=build-step /app/build /usr/share/nginx/html