// modules - encapsulated code
// every file in node is module

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
console.log(data);

require('./7-mind-grenade');

// sayHi(names.angelo);
// sayHi(names.john);
// sayHi(names.peter);
// sayHi("Felipe");

console.log("This is my first node app");