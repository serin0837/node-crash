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

# in terminal

node
-> can code with js

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

- core modules
  path:
