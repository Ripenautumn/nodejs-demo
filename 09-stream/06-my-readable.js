#!/usr/bin/env node

const Readable = require('stream').Readable;

let c = 'a'.charCodeAt(0);

let MyReadable = function() {
  Readable.call(this);
};

MyReadable.prototype = Readable.prototype;

MyReadable.prototype._read = function() {
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) this.push(null);
};

let rs = new MyReadable();
rs.pipe(process.stdout);
