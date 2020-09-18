#!/usr/bin/env node

const http = require('http'),
      url  = require('url'),
      qs   = require('querystring'),
      log  = console.log;

let items = [];

http.createServer((req, res) => {
  let path = url.parse(req.url).pathname;

  if(path != '/') {
    err(res);
    return;
  }

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  add(req, res);
}).listen(8080);

function show(res) {
  let html = '<!DOCTYPE html>\n'
            + '<html>\n'
            + '  <head>\n'
            + '    <meta charset="UTF-8">\n'
            + '    <title>Todo list</title>\n'
            + '  </head>\n'
            + '  <body>\n'
            + '    <h1>Todo List</h1>\n'
            + '    <form method="get" action="/">\n'
            + '       <p><input type="text" name="item" />'
            + '       <input type="submit" value="Add Item" /></p>\n'
            + '    </form>\n'
            + '    <ul>\n'
            + items.map(function(item) {return '      <li>' + item + '</li>';}).join('\n')
            + '    </ul>\n'
            + '  </body>\n'
            + '</html>';

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

function add(req, res) {
  let value = qs.parse(url.parse(req.url).query).item;

  if(typeof value !== 'undefined') items.push(value);

  log(items);
  show(res);
}

function err(res) {
  let msg = 'Not found!';

  res.statusCode = 404;
  res.setHeader('Content-Length', msg.length);
  res.setHeader('Content-Type', 'text/plain');

  res.end(msg);
}
