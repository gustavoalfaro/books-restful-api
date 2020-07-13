# Books RESTful API


A NodeJS server with Sequelize


## Overview


This API uses a variation of libraries to get the cleanest
way to implement a restful versioned api

## Setup

In order to run the project you will need to create a .env variable with at least the next values:

```bash
DATABASE_USERNAME=user
DATABASE_PASSWORD=password
DATABASE_NAME=databasename
DATABASE_HOST=the.host.com
PORT=3031
```

## Installation

This project uses NPM so in order to install all the dependencies run:

```bash
npm install
```


## First Steps

To initialize the DB structure and some data included on this project
you'll need to run the next command:

```bash
npm run db:init
```

