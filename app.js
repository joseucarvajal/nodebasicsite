
const express = require('express');

const { ExpressPeerServer } = require('peer');

const app = express();
const path = require('path');
const router = express.Router();


const server = app.listen(9000);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/myapp'
});


var oneDay = 86400000;
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.use('/', peerServer);


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/peerjs.min.js',function(req,res){
  res.sendFile(path.join(__dirname+'/peerjs.min.js'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
var PORT = process.env.PORT || 3000;
app.use('/', router);
app.listen(PORT);

console.log('Running at Port v2: ', PORT);