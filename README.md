## Description

Test of NestJS and NextJS functionality

## Installation

```bash
$ cd backend
$ npm install
$ cd ../frontend
$ npm install
```

## Go REST API Key Setup

The backend tests out api calls by talking to Go REST free apis. You need a key to make the requests. The /user/<id>/sync API endpoint in the postman collection will pull the user details and save it to the database.

Get an API token from gorest.co.in, then

```bash
# Add your auth token to you environment
$ export AUTH_TOKEN=<api key>
```

## Running the end to end app

```bash
# Start NestJS backend in one terminal
# Starts on port 8000
$ npm run start

# Start NeXtJS frontend in another terminal
# Starts on port 3000
$ npm run dev
```

## Test

```bash
# Import the postman collections
$ Try creating, updating, getting and syncing users
```
