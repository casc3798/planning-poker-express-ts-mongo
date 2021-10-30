# Express TS API

This repository contains an Express api written in TypeScript (transpilation is done via ts-node). This also contains some features like automatic tests using Jest (transpilation is done via ts-jest), linting via ESlint (transpilation is done via typescript-eslint and linting is complemented with Prettier) supporting TSDoc standard comments (this is done via eslint-plugin-tsdoc)

Technology: NodeJS (Express, TypeScript)

## Documentation

## Before running

Be sure that you have created your own .dev.env file in the root of the project, this environment file must have the following variables:

`NODE_ENV="dev" PORT=3000`

Feel free to edit the values according to your environment. Just do not edit NODE_ENV since it is used for run-time validations.

## How to run

You must have installed Docker and (optional) docker-compose to be able to run the local environment.

Navigate to the root of the project and execute the following commands:

`docker-compose build` : This will build the docker image from the Dockerfile definition

`docker-compose up --renew-anon-volumes` : This will run the docker container from the custom image definition and another one from a pre-defined mongodb image

Now you are ready for using the Express TS API, you can do any request to http://localhost:PORT/api/v1/

## Tests

Note: You must have your containers running

For unit tests, execute the following command:

`docker exec -it express-ts-api npm run test:unit`

For integration tests, execute the following command:

`docker exec -it express-ts-api npm run test:int`