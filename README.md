## Book store application (Backend with node Js and Frontend with ReactJs along with typescript)

This project built a CURD funcationality application to create, update, Read and delete of book details. \
Seperate `client` folder is created to handle front-end(UI) part.

Please follow following steps to run this repository.

## Table of Contents

-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Docker](#docker)
-   [APIs](#apis)
-   [Useful Tools and Resources](#useful-tools-and-resources)
-   [Things to do in future](#things-to-do-in-future)

## Features

-   MVC Project Structure.
-   Frontend built in React.js with typescript.
-   Backend built in Node.js with typescript.
-   Database: MongoDB.
-   Container: Docker.

## Prerequisites

To build and run this app locally you MUST need a few things:

-   Install [Node.js](https://nodejs.org/en/)
-   Install [Docker](https://www.docker.com/get-started/)
-   Install [VS Code](https://code.visualstudio.com/)

## Getting Started

To get started you must follow following steps one after another:

1. Clone this repository
2. Install npm into your local VSCode by `npm install`.
3. Create `.env` file at the root of the project.
4. Put the required env variables into .env file, Check below for required env variables.
5. Run docker compose command. First, simply run this command in the terminal: \
   `make up` \
   this command run docker-compose up and build services. \
    Follow Docker section for more details.

### 1) Git Clone

```bash
# Get the latest snapshot
git clone https://github.com/rohbdn07/book-list.git

# Change into root directory
cd book-list
```

### 2) Npm install

`npm install`

### 3 & 4) Put environment variables

Create `.env` file at the root of the project. Put below env variables.

```bash
# required env variables
# you can put your own USER and PASSWORD
MONGO_DB_USER= root
MONGO_DB_PASSWORD= bookstore

```

### 5) Docker

#### make up

After finishing above steps, simply run this command in your terminal: \
 `make up` \
 Make sure you're at the root folder of the project in the terminal.

```bash
# build and run the docker containers
make up
```

it then runs docker-compose up --build and install all the dependencies required.

Next, this backend will serve at: `https://localhost:5000` \
Next, this Front-end will serve at: `https://localhost:3000`

#### make down

Only run this command if you want to stop and removes all services containers.

```bash
# stops and remove the docker containers
make down
```

#### **Congratulations..after doing all this. Now you can see application is running on the screen**

You can test api(s) through Postman. See at [`APIs`] section.

## APIs

The followings are api(s): \
Get Book list

-   GET Request

    -   http://localhost:5000/api/book/all\
        Get all data of book list.

Post book details

-   POST Request

    -   http://localhost:5000/api/book/add\
        body { \
        title, \
        author, \
        description \
        } \
        POST book details.

Update book By ID

-   UPDATE Request
    -   http://localhost:5000/api/book/update/:id\
        UPDATE book details by its id

Delete book By ID

-   UPDATE Request
    -   http://localhost:5000/api/book/delete/:id\
        DELETE book details by its id

### Useful Tools and Resources

TypeScript

-   https://www.typescriptlang.org/

Node Js

-   https://nodejs.org/en/docs/

NPM

-   https://www.npmjs.com/

Express Js

-   http://expressjs.com/

TypeORM

-   https://typeorm.io/

MongoDB Atlas

-   https://www.mongodb.com/atlas/database

Docker

-   https://www.docker.com/get-started/
