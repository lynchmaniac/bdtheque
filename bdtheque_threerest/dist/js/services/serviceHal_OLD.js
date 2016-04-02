"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceTestAll2 = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _dec6, _dec7, _dec8, _class3, _desc2, _value2, _class4, _dec9, _dec10, _class5, _desc3, _value3, _class6, _descriptor, _dec11, _dec12, _class8, _desc4, _value4, _class9, _descriptor2, _dec13, _dec14, _class11, _desc5, _value5, _class12, _descriptor3;

var _threerest = require("threerest");

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var db = require('../database/database');

var ServiceTestAll = (_dec = _threerest.Service.path("/authors"), _dec2 = _threerest.Methods.get(""), _dec3 = _threerest.Hal.halServiceMethod(), _dec4 = _threerest.Methods.get("/:id"), _dec5 = _threerest.Hal.halServiceMethod(), _dec(_class = (_class2 = function () {
  function ServiceTestAll() {
    _classCallCheck(this, ServiceTestAll);
  }

  _createClass(ServiceTestAll, [{
    key: "testGet",
    value: function testGet(value) {
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

  }, {
    key: "testGetId",
    value: function testGetId(value) {
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
  }]);

  return ServiceTestAll;
}(), (_applyDecoratedDescriptor(_class2.prototype, "testGet", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "testGet"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "testGetId", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "testGetId"), _class2.prototype)), _class2)) || _class);
exports.default = ServiceTestAll;
var ServiceTestAll2 = exports.ServiceTestAll2 = (_dec6 = _threerest.Service.path("/authors2"), _dec7 = _threerest.Methods.get(""), _dec8 = _threerest.Hal.halServiceMethod(), _dec6(_class3 = (_class4 = function () {
  function ServiceTestAll2() {
    _classCallCheck(this, ServiceTestAll2);
  }

  _createClass(ServiceTestAll2, [{
    key: "testGet",
    value: function testGet(value) {
      return "it's works, baby cool !!! :-))";
    }
  }]);

  return ServiceTestAll2;
}(), (_applyDecoratedDescriptor(_class4.prototype, "testGet", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class4.prototype, "testGet"), _class4.prototype)), _class4)) || _class3);

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
  for (var i = 0; i < json[categoryField].length; i++) {
    if (json[categoryField][i][searchField] == searchVal) {
      return json[categoryField][i];
    }
  }
}

var Author = (_dec9 = _threerest.Hal.halEntity("/authors/:id"), _dec10 = _threerest.Hal.resourceId(), _dec9(_class5 = (_class6 = function Author(id, firstName, lastName) {
  _classCallCheck(this, Author);

  _initDefineProp(this, "id", _descriptor, this);

  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
}, (_descriptor = _applyDecoratedDescriptor(_class6.prototype, "id", [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class6)) || _class5);
var Serie = (_dec11 = _threerest.Hal.halEntity("/series/:id"), _dec12 = _threerest.Hal.resourceId(), _dec11(_class8 = (_class9 = function Serie(id, name, author) {
  _classCallCheck(this, Serie);

  _initDefineProp(this, "id", _descriptor2, this);

  this.id = id;
  this.name = name;
  this.author = author;
}, (_descriptor2 = _applyDecoratedDescriptor(_class9.prototype, "id", [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class9)) || _class8);
var User = (_dec13 = _threerest.Hal.halEntity("/monApi/toto/:id"), _dec14 = _threerest.Hal.resourceId(), _dec13(_class11 = (_class12 = function User(id, firstName, lastName) {
  _classCallCheck(this, User);

  _initDefineProp(this, "id", _descriptor3, this);

  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
}, (_descriptor3 = _applyDecoratedDescriptor(_class12.prototype, "id", [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class12)) || _class11);