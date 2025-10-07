const EventsEmitter = require('events');

const customEmitter = new EventsEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id: ${id}`);
});

customEmitter.emit('response', 'Angelo');