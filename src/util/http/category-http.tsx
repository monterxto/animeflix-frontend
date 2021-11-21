import HttpResource from "./http-resource";
import { httpVideo } from ".";

class CategoryHttp extends HttpResource {
  constructor() {
    super(httpVideo, "/categories");
  }

  create(data: { name: string, description: string, is_active?: boolean }) {
    return this.http.post(this.resource, data);
  }
}

export default new CategoryHttp();