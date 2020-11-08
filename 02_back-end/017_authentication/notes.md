# Authentication

## Intro to Auth

### PassportJS

- Simple auth for Node.js
- Can be dropped to any Express-based web app
- Passport-Local
  - Strategy we are going to use
- Passport-local-mongoose
  - Authentication used to work with Mongoose
  - Make it faster and simple
- Express-session
  - Package to implement sessions

### Sessions

- HTTP is supposed to be a stateless protocol (when you send requests, those requests are one time things and they don't contain information about your history or the previous requests)
  - HTTP is a one time transation.
  - The way we use to inform that a user is <b>still logged in</b> is using <b>sessions</b>.
  
> In every request that i make on an app when the user is logged in, there is a little bit information (usually encrypted) about that user that is saved in that request (not actually the user and password).

- Sessions allow us have <b>state in the HTTP Requests</b>.
