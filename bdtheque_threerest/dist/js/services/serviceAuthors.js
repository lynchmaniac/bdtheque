"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

var _threerest = require("threerest");

var _author = require("../models/author");

var _author2 = _interopRequireDefault(_author);

var _serie = require("../models/serie");

var _serie2 = _interopRequireDefault(_serie);

var _bdHelper = require("../helpers/bdHelper");

var _bdHelper2 = _interopRequireDefault(_bdHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ServiceAuthors = (_dec = _threerest.Service.path("/authors"), _dec2 = _threerest.Methods.get("/"), _dec3 = _threerest.Hal.halServiceMethod(), _dec4 = _threerest.Pagination.paginate(), _dec5 = _threerest.Methods.get("/:id"), _dec6 = _threerest.Hal.halServiceMethod(), _dec(_class = (_class2 = function () {
  function ServiceAuthors() {
    _classCallCheck(this, ServiceAuthors);
  }

  _createClass(ServiceAuthors, [{
    key: "getAll",
    value: function getAll() {
      return _bdHelper2.default.getAuthors(db);
    }
  }, {
    key: "getswitchId",
    value: function getswitchId(value) {
      var id = value.params.id;
      var result = _bdHelper2.default.searchParams(db, 'authors', 'id', id);
      if (result) {
        return _bdHelper2.default.getAuthor(result, id);
      }
      throw new NotFoundError();
    }
  }]);

  return ServiceAuthors;
}(), (_applyDecoratedDescriptor(_class2.prototype, "getAll", [_dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "getAll"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getswitchId", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "getswitchId"), _class2.prototype)), _class2)) || _class);

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

exports.default = ServiceAuthors;