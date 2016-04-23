"use strict";

var threerest = require('threerest');

import * as ServiceAuthors from "./services/serviceAuthors";
import * as ServiceSeries from "./services/serviceSeries";
import * as ServiceTitles from "./services/serviceTitles";
import * as ServiceTest from "./services/serviceTest";

import express from "express";

var app = express();

app.get("/", function(req, res){
  res.send("hello world");
});


// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceAuthors.default());
threerest.ServiceLoader.loadService(app, new ServiceSeries.default());
threerest.ServiceLoader.loadService(app, new ServiceTitles.default());
threerest.ServiceLoader.loadService(app, new ServiceTest.default());

app.listen(8080, () => {console.log("Express start...");});
