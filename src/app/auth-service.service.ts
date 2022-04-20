import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  // login(data):Observable<any>{
  //   console.log("I am server");
  //   return this.http.post("http://localhost:8083/authenticate",data);
  // }


}
