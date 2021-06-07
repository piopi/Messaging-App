# Messenger

A one-to-one realtime chat app.

## Running Application Locally

###Requirement:
- [Docker](https://docs.docker.com/get-docker/)

At the root of the folder, run the following command:
```
Docker-compose up -d
```

Update your session secret in the `docker-compose.yml` file at the following line:

```
SESSION_SECRET: "your session secret"
```


You access the react app at: `http://localhost:3000`
And the server at: `http://localhost:3001`
