import HttpResource from "./http-resource";
import { httpVideo } from ".";

class GenreHttp extends HttpResource {
  constructor() {
    super(httpVideo, "/genres");
  }
}

export default new GenreHttp();