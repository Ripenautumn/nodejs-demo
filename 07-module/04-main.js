#!/usr/bin/env node

const Circle = require('./04-export-object.js'),
      chalk = require('chalk'),
      log   = console.log,
      green  = chalk.greenBright;

var c = new Circle(20);

log(green('-----------------------------------'));
log(green(`area:         \t${c.area()}`));
log(green(`diameter:     \t${c.diameter()}`));
log(green(`circumference:\t${c.circumference()}`));
log(green('-----------------------------------'));

log(module);
