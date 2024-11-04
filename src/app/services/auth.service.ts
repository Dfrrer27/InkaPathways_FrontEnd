import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {loginUser, registerUser} from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private jwtHelper = new JwtHelperService();
  private baseUrl : string;
  private authUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl  = "http://localhost:8000/";
    this.authUrl = "api/usuarios";
  }

  signUp(user: registerUser): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.authUrl}/registro/`, user);
  }

  signIn(loginuser: loginUser): Observable<string>{
    return this.http.post<string>(`${this.baseUrl}${this.authUrl}/login/`, loginuser)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token')
  }

}
