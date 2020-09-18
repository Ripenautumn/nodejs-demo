#!/usr/bin/env node

const circle = require('./06-export-object.js'),
      chalk = require('chalk'),
      log   = console.log,
      green  = chalk.greenBright;

log(green('-----------------------------------'));
log(green(`area:         \t${circle.area(20)}`));
log(green(`diameter:     \t${circle.diameter(20)}`));
log(green(`circumference:\t${circle.circumference(20)}`));
log(green('-----------------------------------'));

log(module);
