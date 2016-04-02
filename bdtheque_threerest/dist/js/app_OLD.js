'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _desc, _value, _class2;

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
app.get('/', function (req, res) {
  res.send({ message: "Mon second serveur Node.js !!!" });
});
app.listen(8080);
console.log('Le serveur est accessible ici : http://localhost:8080/');

var db = require('./database/database.json');

app.get('/authors', function (req, res) {
  res.json(db['authors']);
});

// @Service.path("/pagination")
// export default class ServicePagination {
//
//   @Method.get("/:id")
console.log(threerest.Methods.get("/"));
console.log(threerest.Service.path(""));

var ServicePagination = (_dec = threerest.Service.path("/paginationX"), _dec2 = threerest.Methods.get("/"), _dec(_class = (_class2 = function () {
  function ServicePagination() {
    _classCallCheck(this, ServicePagination);
  }

  _createClass(ServicePagination, [{
    key: 'testGet',

    // @Hal.halServiceMethod()
    // @Pagination.paginate()
    // @convert(Param)
    value: function testGet(value) {
      return "It's work";
    }
  }]);

  return ServicePagination;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'testGet', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'testGet'), _class2.prototype)), _class2)) || _class);
exports.default = ServicePagination;


app.get('/authors/:id', function (req, res) {
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
  for (var i = 0; i < json[categoryField].length; i++) {
    if (json[categoryField][i][searchField] == searchVal) {
      return json[categoryField][i];
    }
  }
}