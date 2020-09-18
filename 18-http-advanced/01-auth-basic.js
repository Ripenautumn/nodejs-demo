#!/usr/bin/env node

const server = require('http').createServer(),
      log    = console.log,
      assert = require('assert');

server.on('request', (req, res) => {
  log(`\n\n${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  switch(req.url) {
    case '/':
      sendNormalMsg(res);
      break;

    case '/admin':
      sendSecretMsg(req, res);
      break;

    default:
      sendErrorMsg(res); 
  }
});

server.listen(8080);

function userNamePasswd(str) {
  let msg = str.split(' ');
  assert.equal(msg.length, 2, 'must to be 2');
  assert.equal(msg[0], 'Basic', 'must to be Basic');

  let account = Buffer.from(msg[1], 'base64');
  msg = account.toString('utf8').split(':');

  return {
    userName: msg[0],
    passWord: msg[1]
  };
}

function sendNormalMsg(res) {
  res.end('Good day!');
}

function sendSecretMsg(req, res) {
  if(req.headers.authorization) {
    let usr = userNamePasswd(req.headers.authorization);
    console.log('\nauth:', usr);

    if(usr.userName === 'wangding' && usr.passWord === '123') {
      res.end('OK! wangding\'s mobile number: 13582027613');
      return;
    }
  } 

  res.writeHead(401, {'WWW-Authenticate': 'Basic'});
  res.end('who you are?');
}

function sendErrorMsg(res) {
  res.statusCode = 404;
  res.end('404 Error, resource not found!');
}
