#!/usr/bin/env node

const circle = require('./03-export-function'),
      chalk = require('chalk'),
      log   = console.log,
      green  = chalk.greenBright;

var c = circle(20);

log(green('-----------------------------------'));
log(green(`area:         \t${c.area()}`));
log(green(`diameter:     \t${c.diameter()}`));
log(green(`circumference:\t${c.circumference()}`));
log(green('-----------------------------------'));

log(module);
