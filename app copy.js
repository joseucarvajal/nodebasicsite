var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('public'));

server.listen(PORT, function() {
  console.log('App server running');
});

const path = require('path');
const { ExpressPeerServer } = require('peer');
const serverPeer = app.listen(9000);
const peerServer = ExpressPeerServer(serverPeer, {
  debug: true,
  path: '/myapp'
});

console.log('Running on port > ', PORT);