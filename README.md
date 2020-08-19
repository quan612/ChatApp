# ChatApp
A Web application built with NodeJS, ExpressJS, SocketIO

On Backend side, admin can manage users, group, permissions, other modules etc...

## Demo
https://nodejs-quan-61288.herokuapp.com/

Login with:

admin / 12345


## Features

- Chat application
  - Home chat: any login user can send message 
  - Room chat: chat specific to room
  - Private chat: private message between 2 users
  - Add friend / Remove Friend
  - Message Notifications
  
- BackEnd
  - Login using the above credentials then go to Admin Control Panel.

## Config
The configuration is at bin > www

```
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "5678");
app.set("port", port);
```

## Installation

Install all npm dependecies

```console
npm install
```

Install nodemon globally

```console
npm install -g nodemon
```


## Start locally 

```console
npm run dev
```

