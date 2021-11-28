import HttpResource from "./http-resource";
import { httpVideo } from ".";

class GenreHttp extends HttpResource {
  constructor() {
    super(httpVideo, "/genres");
  }

  listWithCategories() {
    return this.http.get(`${this.resource}/withcategories`);
  }
}

export default new GenreHttp();