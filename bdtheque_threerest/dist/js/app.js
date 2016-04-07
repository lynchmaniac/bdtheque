"use strict";

var _serviceAuthors = require("./services/serviceAuthors");

var ServiceAuthors = _interopRequireWildcard(_serviceAuthors);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var threerest = require('threerest');
// import { ServiceAuthor } from "./services/serviceAuthors";
//import { ServiceTestId } from "./serviceHal";
// ServiceTestAll
// ServiceTestId

var app = (0, _express2.default)();

app.get("/", function (req, res) {
  res.send("hello world");
});

// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceAuthors.default());
// threerest.ServiceLoader.loadService(app, new ServiceAuthor());
// threerest.ServiceLoader.loadService(app, new ServiceAuthors2());

app.listen(8080, function () {
  console.log("Express start...");
});