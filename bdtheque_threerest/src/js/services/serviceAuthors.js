import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";
import { Pagination } from "threerest";
import { NotFoundError } from "threerest";

// import * as Author from "../models/author";

var db = require('../database/database');

@Service.path("/authors")
export default class ServiceAuthors {

  @Methods.get("/")
  @Hal.halServiceMethod()
  @Pagination.paginate()
  testGetId(value) {
    return getAuthors(db);
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod()
  testGetId(value) {
    var id = value.params.id;
  	var result = searchParams(db, 'authors', 'id', id);
  	if (result) {
      return getAuthor(result, id);
  	} else {
  	  throw new NotFoundError();
  	}
  }
}

/*
 * Traitement de l'ensemble des données pour transformer les entrées
 * auteur de la base de donnée en suite d'objet Author
 */
function getAuthors(json) {
  var arr = [];
  var len = json["authors"].length;
  for (var i = 0; i < len; i++) {
      arr.push(getAuthor(json["authors"][i], i));
  }
  return arr;
}

/*
 * A partir des données d'un auteur, on crée un objet Author.
 * Chaque objet Serie est crée et ajouté à l'Author.
 */
function getAuthor(json, id) {
  var series = [];
  for (var i=0 ; i < json["series"].length ; i++)
  {
    series.push(getSerie(db, json["series"][i]["id"]));
  }
  return new Author(id, json["first_name"], json["last_name"], series);
}

/*
 * A partir des données d'une série, on crée un objet Serie.
 */
function getSerie(json, id) {
  return new Serie(id, json["series"][id]["name"]);
}

// Renvoie l'objet json correspondant à la catégorie, au critère voulue
function searchParams(json, categoryField, searchField, searchVal) {
  for (var i=0 ; i < json[categoryField].length ; i++)
  {
    if (json[categoryField][i][searchField] == searchVal) {
      return json[categoryField][i]
    }
  }
}


@Hal.halEntity("/authors/:id")
class Author {

  @Hal.resourceId()
  id = 0;

  constructor(id, firstName, lastName, series) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.series = series;
  }
}

@Hal.halEntity("/series/:id")
class Serie {

  @Hal.resourceId()
  id_serie = 0;

  constructor(id_serie, name, author) {
    this.id_serie = id_serie;
    this.name = name;
    this.author = author;
  }
}

@Hal.halEntity("/monApi/toto/:id")
class User {

  @Hal.resourceId()
  id = 0;

  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
