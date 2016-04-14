import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";

import Author from "../models/author";
import Serie  from "../models/serie";
import Title  from "../models/title";
import BdHelper from "../helpers/bdHelper";

var db = require('../database/database');


@Service.path("/series")
export default class ServiceSeries {

  @Methods.get("/")
  @Hal.halServiceMethod(true)
  getAll() {
    return BdHelper.getSeries(db);
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod(false)
  getswitchId(value) {
    var id = value.id;
   	var result = BdHelper.searchParams(db, 'series', 'id', id);
   	if (result) {
       return BdHelper.getSerie(result, id);
   	}
     throw new NotFoundError();
  }
}
