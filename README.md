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