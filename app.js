// modules - encapsulated code
// every file in node is module

const names = require('./4-names');
const sayHi = require('./5-utils');

sayHi(names.angelo);
sayHi(names.john);
sayHi(names.peter);
sayHi("Felipe");

console.log("This is my first node app");