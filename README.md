# Simple Task Management Tool (Backend)
Foobar is a Python library for dealing with word pluralization.

## Installation
Download and install [NodeJS LTS](https://nodejs.org/en/).
Confirm that the application installed by issuing the command:
```bash
node -v
```
You should see a similar printout:
```bash
$ node -v
v14.15.5
```

Next, globally install the following NPM module:

```bash
npm install -g npm@latest typescript tslint
```

Download and install [Docker](https://www.docker.com/).
Confirm that the application installed by issuing the command:
```bash
docker -v
```

You should see a similar printout:
```bash
$ docker -v
Docker version 20.10.2, build 2291f61
```

## Usage
Run this command to download the node modules:
```bash
npm install
```

Starting the application is easy! Run the following command:
```bash
npm start
```

If you would like to run tests, run this command:
```bash
npm test
```

If you would like to run the linter, run this command:
```bash
npm lint
```

If you would like to build the application, run this command:
```bash
npm build
```

To Dockerize the application, run the following command from the application's root directory:
```bash
docker build -t simple-task-management-tool-frontend .
```

Then, run the Docker application, assuming port 3000:
```bash
docker run --rm -p 3000:3000 --name simple-task-management-tool-frontend simple-task-management-tool-frontend:latest
```

## Backend Component
You will need the backend API running in the background in order to make the appropriate API calls. That repo can be found at ```https://github.com/jcosentino/simple-task-management-tool-backend```.

Clone it in a separate folder:
```bash
git clone git@github.com:jcosentino/simple-task-management-tool-backend.git
```

Finally, follow the directions according to the backend appication's README.

## Compatibility
This application has been tested on the following web browsers (desktop and mobile Android):
```
Google Chrome
Mozilla Firefox
```

Any other browsers might not work as intended. Use other browsers at your own risk.
