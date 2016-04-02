"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _dec7, _dec8, _class3, _desc2, _value2, _class4, _descriptor, _dec9, _dec10, _class6, _desc3, _value3, _class7, _descriptor2, _dec11, _dec12, _class9, _desc4, _value4, _class10, _descriptor3;

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

// import * as Author from "../models/author";

var db = require('../database/database');

var ServiceAuthors = (_dec = _threerest.Service.path("/authors"), _dec2 = _threerest.Methods.get("/"), _dec3 = _threerest.Hal.halServiceMethod(), _dec4 = _threerest.Pagination.paginate(), _dec5 = _threerest.Methods.get("/:id"), _dec6 = _threerest.Hal.halServiceMethod(), _dec(_class = (_class2 = function () {
  function ServiceAuthors() {
    _classCallCheck(this, ServiceAuthors);
  }

  _createClass(ServiceAuthors, [{
    key: "testGetId",
    value: function testGetId(value) {
      return getAuthors(db);
    }
  }, {
    key: "testGetId",
    value: function testGetId(value) {
      var id = value.params.id;
      var result = searchParams(db, 'authors', 'id', id);
      if (result) {
        return getAuthor(result, id);
      } else {
        // Si la liste est vide on renvoie un 200 avec un message d'explication
        return errors['empty_list_authors'];
      }
    }
  }]);

  return ServiceAuthors;
}(), (_applyDecoratedDescriptor(_class2.prototype, "testGetId", [_dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "testGetId"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "testGetId", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "testGetId"), _class2.prototype)), _class2)) || _class);

/*
 * Traitement de l'ensemble des données pour transformer les entrées
 * auteur de la base de donnée en suite d'objet Author
 */

exports.default = ServiceAuthors;
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
  for (var i = 0; i < json["series"].length; i++) {
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
  for (var i = 0; i < json[categoryField].length; i++) {
    if (json[categoryField][i][searchField] == searchVal) {
      return json[categoryField][i];
    }
  }
}

var Author = (_dec7 = _threerest.Hal.halEntity("/authors/:id"), _dec8 = _threerest.Hal.resourceId(), _dec7(_class3 = (_class4 = function Author(id, firstName, lastName, series) {
  _classCallCheck(this, Author);

  _initDefineProp(this, "id", _descriptor, this);

  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.series = series;
}, (_descriptor = _applyDecoratedDescriptor(_class4.prototype, "id", [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class4)) || _class3);
var Serie = (_dec9 = _threerest.Hal.halEntity("/series/:id"), _dec10 = _threerest.Hal.resourceId(), _dec9(_class6 = (_class7 = function Serie(id_serie, name, author) {
  _classCallCheck(this, Serie);

  _initDefineProp(this, "id_serie", _descriptor2, this);

  this.id_serie = id_serie;
  this.name = name;
  this.author = author;
}, (_descriptor2 = _applyDecoratedDescriptor(_class7.prototype, "id_serie", [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class7)) || _class6);
var User = (_dec11 = _threerest.Hal.halEntity("/monApi/toto/:id"), _dec12 = _threerest.Hal.resourceId(), _dec11(_class9 = (_class10 = function User(id, firstName, lastName) {
  _classCallCheck(this, User);

  _initDefineProp(this, "id", _descriptor3, this);

  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
}, (_descriptor3 = _applyDecoratedDescriptor(_class10.prototype, "id", [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class10)) || _class9);