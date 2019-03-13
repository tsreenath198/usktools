import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl: string = "http://106.0.37.69:8282/api/yuvan/"
  constructor(private http: HttpClient) { }
  create(data: any, url) {
    return this.http.post(this.configUrl + url, data);
  }
  public getReq(URL: string) {
    return this.http.get(this.configUrl + URL);
  }
  public getLogin(URL: string) {
    return this.http.get(URL);
  }
  public getKLData(URL : string){
    return this.http.get(URL);
  }
}
