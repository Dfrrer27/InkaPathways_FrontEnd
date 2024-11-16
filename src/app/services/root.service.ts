import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class RootService {

  private jwtHelper = new JwtHelperService();
  private baseUrl : string;
  private rootUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl  = "http://localhost:8000/";
    this.rootUrl = "root/triptico/";
  }

  userLeaflet(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${this.rootUrl}`);
  }

}
