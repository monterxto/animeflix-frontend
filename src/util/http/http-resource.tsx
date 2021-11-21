import { AxiosInstance } from "axios";

export default class HttpResource {

  constructor(protected http: AxiosInstance, protected resource: string) {}

  list() {
    return this.http.get(this.resource);
  }

  get(id: number) {
    return this.http.get(`${this.resource}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.resource, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.resource}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.resource}/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.resource);
  }
}
