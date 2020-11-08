# Environment Variables

- Our development database and deploy database are connect, this is a problem.
- If I want to test if the delete route is working, I will delete it too on production database.
- It is a good idea to have <b>separate databases</b> like the localhost for dev and the mongo atlas for production.

`process.env.PORT` is a environment variable which stores the data about the PORT of the current execution of node (process).

What we need to do is: create an environment variable that we will call `process.env.DATABASEURL` on the command line.

```bash
export DATABASEURL=mongodb://localhost/yelp_camp
```

- This set the app to run local on development, so you can change it on mongoose:

```javascript
mongoose.connect(process.env.DATABASEURL);
```

- After that you can <b>add the environment variable for Heroku production process.</b>

```
Key = DATABASEURL
Value = mongodb+srv://<username>:<password>@cluster0-xk2ep.mongodb.net/test?retryWrites=true&w=majority
```

- So you will have different databases for dev and production and your user and password for the remote database are <b>hidden from the code</b>.

- Another thing to do is to setup a <b>BACKUP</b> rather than only have the environment variable, knowing that we can lost this variable.

```javascript
var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
mongoose.connect(url);
```

- PS.: There are another ways to set environment variables in Heroku, like using the command line.
