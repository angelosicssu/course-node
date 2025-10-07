# notes -> course nodeJS

## what's nodeJS?
- NodeJS is enviroment to run JS outside browser
- Made in 2009 and is built using the google chrome V8 engine
- Development FullStack

## main differences between browser and nodeJS

### browser
- DOM (Document Object Model)
- Window
- Interactive Apps
- No Filesystem
- Fragmentation
- ES6

### nodeJS
- No DOM
- No Window
- Server Side Apps
- No access to browser APIs

## installation

- difference between LTS and Current
- LTS: Long Time Support
- Current: Bugs and development

## program execution

### first option:
- navigate to cli
- type "node program.js"

### second option:
- use the cli in vscode
- -> dash (traço)

## globals
- variables used to access properties
- __dirname
- __filename
- require
- module
- process

## modules
- The code cannot be messed up
- To export, you need to use module.exports = { content }
- And to use variables from module.exports, you need to use require('./directory)

### built-in modules
- os: information about operating system
- path: manipulates file and directory paths
- fs: works with file system (read, write, edit,....)
- http

### sync x async
- sync: tasks one after another
- async: tasks at the same time

### http
- to create a server: http.createServer() -> callback
- to create a port for the server: server.listen(port)

## npm

### info
- npm allows you to do three things:
    i.   reuse our code
    ii.  use code written by others developers
    iii. to share our results with others developers
- commands:
    npm i <packageName> -> local dependency
    npm install -g <packageName> -> global dependency
- package.json: is very important for working with others developers
    installation: npm init / npm init -y

## share code
- usually the developers hide the package node_modules, because it is very big
- But if you have package.json everything is fine

## nodemon
- used to not reboot node.js server

## package.json
- dependencies -> used in the project
- devDependecies -> used during development
- scripts -> shortcuts
- start and test not need "npm run"

## global install
- use it in any project
- npm install -g <packageName>

## event loops
- operations that last a long time, do not interrupt the main flow
- phases:
    i.   timers: callbacks executed
    ii.  input/output: reads file/write file
    iii. pool: node checks if new input/outputw events are ready
    iv.  check: where the callbacks are executed
    v.   close callbacks: where callbacks are finished

## async patterns
- promises:
    promise.then().catch().finally()
    then -> if ok
    catch -> if err
    finally -> finally

## events emitter

## streams