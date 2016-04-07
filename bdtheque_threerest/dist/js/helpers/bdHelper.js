"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _author = require("../models/author");

var _author2 = _interopRequireDefault(_author);

var _serie = require("../models/serie");

var _serie2 = _interopRequireDefault(_serie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = require("assert");

var db = require('../database/database');

var BdHelper = function () {
  function BdHelper() {
    _classCallCheck(this, BdHelper);
  }

  _createClass(BdHelper, null, [{
    key: "getAuthors",


    /*
     * Traitement de l'ensemble des données pour transformer les entrées
     * auteur de la base de donnée en suite d'objet Author
     */
    value: function getAuthors(json) {
      var arr = [];
      var len = json["authors"].length;
      for (var i = 0; i < len; i++) {
        arr.push(BdHelper.getAuthor(json["authors"][i], i));
      }
      console.log(arr);
      return arr;
    }

    /*
     * A partir des données d'un auteur, on crée un objet Author.
     * Chaque objet Serie est crée et ajouté à l'Author.
     */

  }, {
    key: "getAuthor",
    value: function getAuthor(json, id) {
      var series = [];
      for (var i = 0; i < json["series"].length; i++) {
        console.log();
        series.push(BdHelper.getSerie(db, json["series"][i]["id"]));
      }
      return new _author2.default(id, json["first_name"], json["last_name"], series);
    }

    /*
     * A partir des données d'une série, on crée un objet Serie.
     */

  }, {
    key: "getSerie",
    value: function getSerie(json, id) {
      console.log("coucou");
      return new _serie2.default(id, json["series"][id]["name"]);
    }

    // Renvoie l'objet json correspondant à la catégorie, au critère voulue

  }, {
    key: "searchParams",
    value: function searchParams(json, categoryField, searchField, searchVal) {
      for (var i = 0; i < json[categoryField].length; i++) {
        if (json[categoryField][i][searchField] == searchVal) {
          return json[categoryField][i];
        }
      }
    }

    // /**
    //  * Return the complete data for the test.
    //  *
    //  * @method
    //  * @returns {json}
    //  */
    // static getTestData() {
    //   return [
    //       {firstName:"Peter", lastName:"Parker", secretIdentity: "Spiderman", offset:"0"},
    //       {firstName:"Bruce", lastName:"Wayne", secretIdentity: "Batman", offset:"1"},
    //       {firstName:"Clark", lastName:"Kent", secretIdentity: "Superman", offset:"2"},
    //       {firstName:"Tony", lastName:"Stark", secretIdentity: "Iron Man", offset:"3"},
    //       {firstName:"Steve", lastName:"Roders", secretIdentity: "Captain America", offset:"4"},
    //       {firstName:"Bruce", lastName:"Banner", secretIdentity: "Hulk", offset:"5"},
    //       {firstName:"Natasha", lastName:"Romanoff", secretIdentity: "Black Widow", offset:"6"},
    //       {firstName:"James", lastName:"Howlett", secretIdentity: "Wolverine", offset:"7"},
    //       {firstName:"Matt", lastName:"Murdock", secretIdentity: "Daredevil", offset:"8"},
    //       {firstName:"Wade", lastName:"Wilson", secretIdentity: "Deadpool", offset:"9"},
    //       {firstName:"Elektra", lastName:"Natchios", secretIdentity: "Elektra", offset:"10"},
    //       {firstName:"Dave", lastName:"Lizewski", secretIdentity: "Kick-Ass", offset:"11"},
    //       {firstName:"Franck", lastName:"Castle", secretIdentity: "Punisher", offset:"12"}
    //     ];
    // }
    //
    // /**
    //  * Test all the data return from the test.
    //  * The firstName, the lastName, the secretIdentity and the offset is test.
    //  *
    //  * @method
    //  */
    // static testOneEntry(data, expected) {
    //   assert.equal(data.firstName, expected.firstName);
    //   assert.equal(data.lastName, expected.lastName);
    //   assert.equal(data.secretIdentity, expected.secretIdentity);
    //   assert.equal(data.offset, expected.offset);
    // }
    //
    // /**
    //  * Test all the data return from the test.
    //  * The firstName, the lastName, the secretIdentity and the offset is test.
    //  *
    //  * @method
    //  */
    // static testData(data, expected, index, length) {
    //   for (var i = index; i < length; i++) {
    //     //console.log(data[i]);
    //     //console.log(expected[i]);
    //     DataHelper.testOneEntry(data[i], expected[i]);
    //   }
    // }

  }]);

  return BdHelper;
}();

exports.default = BdHelper;