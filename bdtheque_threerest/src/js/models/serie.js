import { Hal } from "threerest";

@Hal.halEntity("/series/:id")
export default class Serie {

  @Hal.resourceId()
  idSerie = 0;

  constructor(idSerie, name, author) {
    this.idSerie = idSerie;
    this.name = name;
    this.author = author;
  }
}
