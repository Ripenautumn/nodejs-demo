const EventEmitter = require('events').EventEmitter;

function Dog(name, energy) {
  let _name   = name,
      _energy = energy,
      that    = this;

  EventEmitter.call(this);

  let timer = setInterval(() => {
    if(_energy > 0) {
      that.emit('bark');
      _energy--;
    } else {
      clearInterval(timer);
    }
  }, 1000);

  this.name   = () => _name;
  this.energy = () => _energy;
}

Dog.prototype = EventEmitter.prototype;

module.exports = Dog;
