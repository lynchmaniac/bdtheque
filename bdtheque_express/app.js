//Ajout du framework Express
var express = require('express');
// Instanciation du framework
var app = express();

// Création de la route par défaut, celle présente à la racine.
app.get('/', function(req, res) {
  res.send(JSON.stringify({message:"Mon second serveur Node.js !!!"}));
});

// Déclaration du port d'écoute du serveur.
app.listen(8080);
console.log('Le serveur est accessible ici : http://localhost:8080/');
