# why node?

- fast, efficient and highly scalable
- event driven, non-blocking I/O model
- popular in the industry
- same language (JS)

# npm

- node package manager
- npm init, npm install,

# node modules

- node core modules(path,fs,http,etc)
- 3rd party modules
- custom modules(files)

# etc

- in terminal
  node -> can code with js

- dependency: nodemon-don't need to restart server
  npm install -D nodemon

- node-modules
  never want to host
  delete -> npm install then recreate

- module wrapper function

```js
  function(exports,require,module,__filename,__dirname)
```

- why not `import Person from "./person";?`
  because node not implement yet

- check reference/demos

# deploy

- download heroku
- `heroku --version`
- `heroku login`
- `heroku create`->create random name domain
- go my app->deploy tap and copy `heroku git:remote -a tranquil-inlet-86102`
- git push heroku master -> error
- `heroku open`
