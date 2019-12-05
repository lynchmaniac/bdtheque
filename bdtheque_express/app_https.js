var fs = require('fs'),
  https = require('https');

//Ajout du framework Express
var express = require('express');
// Instanciation du framework
var app = express();

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(8443);

// Création de la route par défaut, celle présente à la racine.
app.get('/', function(req, res) {
  console.log("res.body");
  superagent
    .get('http://localhost:8080/')
    .set('accept', 'json')
    .end((err, res) => {
      // Calling the end function will send the request
      console.log(res.body);
    });
  res.header('Content-type', 'text/html');
  //res.send({message:"Mon second serveur Node.js !!!"});
  return res.end('<h1>HTTPS WORKSC!</h1>');
});

// Déclaration du port d'écoute du serveur.
//app.listen(443);
console.log('Le serveur est accessible ici : https://localhost:8443/');

const superagent = require('superagent');
