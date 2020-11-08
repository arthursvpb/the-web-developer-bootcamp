# Deploying with Heroku

- It is important that you use `--save` flag when npm install so Heroku know which dependencies to install.
- After adding all files with git that you want to send to heroku, execute the following command:

```
heroku create
```

- <b>Make space on heroku, generate an URL and associate it with the current git repository</b>.
- It will make a <b>remote</b> (a place where you can push your local repository to a conected repository, usually on internet) to a git repository.
- So you can <b>push</b> (transfer) the code to heroku.

```
git remote -v
git push heroku master
```

## Application error on heroku

- You can view the error messages in the logs in the command line.

```
heroku logs
```

### Debugging in heroku

- `npm start` error: we didn't have a _start script_ to tell what code to run to start the application.
- we need to run `node app.js` to run our code
- to do that, we can modify our <b>package.json</b> (metadata file to the project)

```json
  "name": "yelpcampproject",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  "start": "node app.js"
```
