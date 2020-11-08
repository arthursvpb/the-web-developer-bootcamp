# Deploying an node.js app with Heroku and solving problems

1. Put `"start": node app.js` on the package.json file
2. Commit your changes
3. `git push heroku master`

## Heroku terminal service to manage files remotely

```
heroku run
```

Connect to heroku server and run the command ls

```
heroku run ls
```

If we forgot to --save a file on heroku

```
run npm install package --save
```

## Handle database inside heroku

- heroku can't see our local database server (localhost)
- the common solution is use the <b>hosted mongo database</b>
- MongoLab is now <b>Mongo Atlas</b>
- A instance of mongo running somewhere

So we have to <b>take the url and connect it to the code.</b>

## Mongo Atlas + Heroku connect

1. Connect the URL with the code

```javascript
mongoose
  .connect(
    "mongodb+srv://username:password@yelpcamp-bu7y6.gcp.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err.message);
  });
```

2. Switch the port to `port = process.env.PORT;`
3. Make the allowed IP `0.0.0.0/0` in Atlas so the database can be accessful for everyone (ALLOW ACCESS FROM ANYWHERE)
4. Add the following enviroment variable in Heroku:

```
Key = DATABASE_URI
Value = mongodb+srv://<username>:<password>@cluster0-xk2ep.mongodb.net/test?retryWrites=true&w=majority
```

_See more: [Connect MongoDB Atlas to your Heroku application](https://www.youtube.com/watch?v=imR9LlbG3pU)_

5. Add the changes, commit and push into heroku