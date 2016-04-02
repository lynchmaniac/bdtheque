import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";

var db = require('../database/database');

@Service.path("/authors")
export default class ServiceTestAll {

  @Methods.get("")
  @Hal.halServiceMethod()
  testGet(value) {
    return "it's works, baby cool !!! :-))";
  }

  // @Methods.get("")
  // @Hal.halServiceMethod()
  // testGet(value) {
  // 	// var result = searchParams(db, 'authors', 'id', value.params.id);
  // 	// if (result) {
  // 	// 	return getSerie(result, id); //result;
  // 	// } else {
  // 	// 	// Si la liste est vide on renvoie un 200 avec un message d'explication
  // 	// 	return errors['empty_list_authors'];
  // 	// }
  //   return "it's works, baby cool !!! :-))";
  //   // console.log("coucou");
  //   // var all = getAuthors(db);
  //   // console.log(all);
  //   // // return all;
  //   // return all;
  // }

  @Methods.get("/:id")
  @Hal.halServiceMethod()
  testGetId(value) {
  	// var result = searchParams(db, 'authors', 'id', value.params.id);
  	// if (result) {
  	// 	return getSerie(result, id); //result;
  	// } else {
  	// 	// Si la liste est vide on renvoie un 200 avec un message d'explication
  	// 	return errors['empty_list_authors'];
  	// }
    //return "it's works, baby cool !!!XXXXXXXXXX :-))";
    return [new User(1, "firstName1", "lastName1"), new User(2, "firstName2", "lastName2")];
  }
}
@Service.path("/authors2")
export class ServiceTestAll2 {

  @Methods.get("")
  @Hal.halServiceMethod()
  testGet(value) {
    return "it's works, baby cool !!! :-))";
  }

}

// @Service.path("/authors")
// export class ServiceTestId {
//   @Methods.get("/:id")
//   @Hal.halServiceMethod()
//   testGetId(value) {
//   	// var result = searchParams(db, 'authors', 'id', value.params.id);
//   	// if (result) {
//   	// 	return getSerie(result, id); //result;
//   	// } else {
//   	// 	// Si la liste est vide on renvoie un 200 avec un message d'explication
//   	// 	return errors['empty_list_authors'];
//   	// }
//     return "it's works, baby cool !!!XXXXXXXXXX :-))";
//     // return [new User(1, "firstName1", "lastName1"), new User(2, "firstName2", "lastName2")];
//   }
// }

function getAuthors(json) {
  console.log("coucou");
  var arr = [];
  var len = json["authors"].length;
  for (var i = 1; i < len; i++) {
    console.log(len);
      arr.push(getAuthor(json, i));
  }
  console.log(arr);
  return JSON.stringify(arr);
}
function getAuthor(json, id) {
  return new Author(id, json["authors"][id]["first_name"], json["authors"][id]["last_name"]);
}
function getSerie(json, id) {
  return new Serie(id, json["series"][id]["name"], json["series"][id]["author"]);
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

  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

@Hal.halEntity("/series/:id")
class Serie {

  @Hal.resourceId()
  id = 0;

  constructor(id, name, author) {
    this.id = id;
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
