"use strict";

var threerest = require('threerest');

import * as ServiceAuthors from "./services/serviceAuthors";
// import { ServiceAuthors2 } from "./services/serviceAuthors";
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
//threerest.ServiceLoader.loadService(app, new ServiceTestId());
// threerest.ServiceLoader.loadService(app, new ServiceAuthors2());


app.listen(8080, () => {console.log("Express start...");});
