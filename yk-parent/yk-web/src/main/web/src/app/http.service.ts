import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl: string = "http://106.0.37.69:8282/api/"
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
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', 'http://localhost:8080/downloadApiResponse', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
}
