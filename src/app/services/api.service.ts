import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'http://codebreaker-node.herokuapp.com';
  secretPath ='/codebreaker/setsecret?value='
  guestPath = '/codebreaker/guest?value='



  constructor(private http: HttpClient) { }


  setSecret(secret): Observable<any> {
    console.log(secret)
    return this.http.get<String>(this.URL + this.secretPath + secret).map(Response => {
      return Response
    });
  }

  guest(value): Observable<any> {
    return this.http.get<String>(this.URL + this.guestPath + value).map(Response => {
      return Response
    });
  }


}
