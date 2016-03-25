var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({message:"Mon premier serveur Node.js !!!"}));
}).listen(8080);
console.log('Le serveur est accessible ici : http://localhost:8080/');
