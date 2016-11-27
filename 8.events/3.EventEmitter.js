//node给我们提供了一个事件库 ，内置的
var EventEmitter = require('events');
var util = require('util');
function Man() {
}
util.inherits(Man,EventEmitter);
var man = new Man();
function buyCar(who) {
    console.log('buyPack'+who);
}
function buyPack(who) {
    console.log('buyCar'+who);
}
man.on('有钱',buyCar);
man.on('有钱',buyPack);
man.removeAllListeners('有钱')
//man.removeListener('有钱',buyCar);
man.emit('有钱','妹子');
man.emit('有钱','妹子');
// on once removeListener emit removeAllListener
