const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (text) => {
    console.log(`data recieved: ${text}`);
})

customEmitter.emit('response', 'Hello World');