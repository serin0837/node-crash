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
  so I did again and its working

0. <fey repo check!!>
   https://github.com/FeyAgape/GitAndMore/blob/master/heroku.md
1. `heroku login`do it in terminal not in vs code
2. .gitignore
3. git init
4. git add.
5. git commit -m"Initial commit"
6. heroku create
7. go to deploy
8. copy in third line
   `heroku git:remote -a <name>`
9. `git push heroku master`
10. `heroku open`

\*when I `git remote -v` its connected with heroku and git!
