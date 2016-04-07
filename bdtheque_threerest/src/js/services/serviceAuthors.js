import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";
import { Pagination } from "threerest";

import Author from "../models/author";
import Serie  from "../models/serie";
import BdHelper from "../helpers/bdHelper";

var db = require('../database/database');


@Service.path("/authors")
export default class ServiceAuthors {

  @Methods.get("/")
  @Hal.halServiceMethod()
  @Pagination.paginate()
  getAll() {
    return BdHelper.getAuthors(db);
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod()
  getswitchId(value) {
    var id = value.params.id;
  	var result = BdHelper.searchParams(db, 'authors', 'id', id);
  	if (result) {
      return BdHelper.getAuthor(result, id);
  	}
    throw new NotFoundError();
  }
}


// @Service.path("/authors")
// export default class ServiceAuthors {
//
//   @Methods.get("/")
//   @Hal.halServiceMethod()
//   @Pagination.paginate()
//   testGetId(value) {
//     return getAuthors(db);
//   }
//
// }
//
// @Service.path("/authors")
// export class ServiceAuthor {
//
//   @Methods.get("/:id")
//   @Hal.halServiceMethod()
//   testGetId(value) {
//     var id = value.params.id;
//   	var result = searchParams(db, 'authors', 'id', id);
//   	if (result) {
//       var author = getAuthor(result, id);
//       console.log(author);
//       return author;
//   	} else {
//   		// Si la liste est vide on renvoie un 200 avec un message d'explication
//   		return errors['empty_list_authors'];
//   	}
//   }
// }



// /*
//  * Traitement de l'ensemble des données pour transformer les entrées
//  * auteur de la base de donnée en suite d'objet Author
//  */
// function getAuthors(json) {
//   var arr = [];
//   var len = json["authors"].length;
//   for (var i = 0; i < len; i++) {
//       arr.push(getAuthor(json["authors"][i], i));
//   }
//   return arr;
// }
//
// /*
//  * A partir des données d'un auteur, on crée un objet Author.
//  * Chaque objet Serie est crée et ajouté à l'Author.
//  */
// function getAuthor(json, id) {
//   var series = [];
//   for (var i=0 ; i < json["series"].length ; i++)
//   {
//     series.push(getSerie(db, json["series"][i]["id"]));
//   }
//   var author =  new Author(id, json["first_name"], json["last_name"], series);
//   return author;
// }
//
// /*
//  * A partir des données d'une série, on crée un objet Serie.
//  */
// function getSerie(json, id) {
//   return new Serie(id, json["series"][id]["name"]);
// }
//
// // Renvoie l'objet json correspondant à la catégorie, au critère voulue
// function searchParams(json, categoryField, searchField, searchVal) {
//   for (var i=0 ; i < json[categoryField].length ; i++)
//   {
//     if (json[categoryField][i][searchField] == searchVal) {
//       return json[categoryField][i]
//     }
//   }
// }
