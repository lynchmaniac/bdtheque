"use strict";

var threerest = require('threerest');

import * as ServiceAuthors from "./services/serviceAuthors";
import * as ServiceTitles from "./services/serviceTitles";
import * as ServiceTest from "./services/serviceTest";
// import { ServiceAuthor } from "./services/serviceAuthors";
//import { ServiceTestId } from "./serviceHal";
// ServiceTestAll
// ServiceTestId

import express from "express";

var app = express();

app.get("/", function(req, res){
  res.send("hello world");
});


// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceAuthors.default());
threerest.ServiceLoader.loadService(app, new ServiceTitles.default());
threerest.ServiceLoader.loadService(app, new ServiceTest.default());
// threerest.ServiceLoader.loadService(app, new ServiceAuthor());
// threerest.ServiceLoader.loadService(app, new ServiceAuthors2());


app.listen(8080, () => {console.log("Express start...");});
