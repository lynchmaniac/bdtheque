import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";

import Author from "../models/author";
import Serie  from "../models/serie";
import BdHelper from "../helpers/bdHelper";

var db = require('../database/database');


@Service.path("/authors")
export default class ServiceAuthors {

  @Methods.get("/")
  @Hal.halServiceMethod(true)
  getAll() {
    return BdHelper.getAuthors(db);
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod()
  getswitchId(value) {
    var id = value.id;
  	var result = BdHelper.searchParams(db, 'authors', 'id', id);
  	if (result) {
      return BdHelper.getAuthor(result, id);
  	}
    throw new NotFoundError();
  }
}
