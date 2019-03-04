import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl: string = "http://localhost:8181/api/yuvan/create"
  constructor(private http: HttpClient) { }
  create(data: any) {
    return this.http.post(this.configUrl, data);
  }
  public getReq(URL: string) {
    return this.http.get(URL);
  }
  public getLogin(URL: string) {
    return this.http.get(URL);
  }
}
