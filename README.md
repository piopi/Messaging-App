# Messenger

A one-to-one realtime chat app.

## Running Application Locally

###Requirement:
- [Docker](https://docs.docker.com/get-docker/)

At the root of the folder, run the following command:
```
Docker-compose up -d
```

Create a .env file in the server directory and add your session secret, sql credentials and url as follow:

```
# SERVER VARIABLES
DATABASE_URL= postgres://user:pass@postgres:5432/messenger
NODE_ENV= development
SESSION_SECRET= "your session secret"

# Allow hot reloading in container
CHOKIDAR_USEPOLLING= "true"

#POSTGRES Variables
POSTGRES_USER= user
POSTGRES_PASSWORD= pass
POSTGRES_DB= messenger

```


You access the react app at: `http://localhost:3000`
And the server at: `http://localhost:3001`
