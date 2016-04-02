/*
VERSION NODE.JS
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({message:"Mon premier serveur Node.js !!!"}));
  //res.end("Mon premier serveur Node.js !!!");
}).listen(8080);
console.log('Le serveur est accessible ici : http://localhost:8080/');*/

var express = require('express');
var threerest = require('threerest');


var app = express();
app.get('/', function(req, res) {
  res.send({message:"Mon second serveur Node.js !!!"});
});
app.listen(8080);
console.log('Le serveur est accessible ici : http://localhost:8080/');

var db = require('./database/database.json');

app.get('/authors', function(req, res) {
	res.json(db['authors']);
});


// @Service.path("/pagination")
// export default class ServicePagination {
//
//   @Method.get("/:id")
console.log(threerest.Methods.get("/"));
console.log(threerest.Service.path(""));

@threerest.Service.path("/paginationX")
export default class ServicePagination {

  @threerest.Methods.get("/")
  // @Hal.halServiceMethod()
  // @Pagination.paginate()
  // @convert(Param)
  testGet(value) {
    return "It's work";
  }
}



app.get('/authors/:id', function(req, res) {
	var id = req.params.id
	var result = searchParams(db, 'authors', 'id', id);
	if (result) {
		res.json(result);
	} else {
		// Si la liste est vide on renvoie un 200 avec un message d'explication
		res.json(errors['empty_list_authors'])
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
