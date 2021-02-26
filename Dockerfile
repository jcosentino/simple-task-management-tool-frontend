FROM alpine:3.13

WORKDIR /opt/simple-task-management-tool-backend

RUN apk update && apk add nodejs npm --no-cache

COPY package.json ./
COPY package-lock.json ./
RUN npm install --production && npm install -g typescript && npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
