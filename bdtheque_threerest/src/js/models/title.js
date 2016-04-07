import { Hal } from "threerest";

@Hal.halEntity("/titles/:id")
export default class Title {

  @Hal.resourceId()
  id = 0;

  constructor(id, name, author) {
    this.id = id;
    this.name = name;
    this.author = author;
  }
}
