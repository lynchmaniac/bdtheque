"use strict"

//Ajout de la base de donnée
var db = require('./database/database');
var errors = require('./database/errors');
//Ajout du framework Express
var express = require('express');
// Instanciation du framework
var app = express();

// Création de la route par défaut, celle présente à la racine.
app.get('/', function(req, res) {
  res.send(JSON.stringify({message:"Mon second serveur Node.js !!!"}));
});

// Création de la route pour consulter la liste des auteurs.
app.get('/authors', function(req, res) {
  res.json(db['authors']);
});

// Création de la route pour consulter un auteur à partir de son id.
app.get('/authors/:id', function(req, res) {
	var id = req.params.id;
	var result = searchParams(db, 'authors', 'id', id);
	if (result) {
		res.json(result);
	} else {
		// Si la liste est vide on renvoie un 200 avec un message d'explication
		res.json(errors['empty_list_authors']);
	}
});

// Renvoie l'objet json correspondant à la catégorie, au critère voulue
function searchParams(json, categoryField, searchField, searchVal) {
  for (var i=0 ; i < json[categoryField].length ; i++)
  {
    if (json[categoryField][i][searchField] == searchVal) {
      return json[categoryField][i]
    }
  }
}



// Déclaration du port d'écoute du serveur.
app.listen(8080);
console.log('Le serveur est accessible ici : http://localhost:8080/');
