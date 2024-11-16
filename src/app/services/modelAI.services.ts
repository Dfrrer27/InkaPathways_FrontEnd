import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {modelAI} from "../interfaces/ModelAI";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ModelAIService {

  private jwtHelper = new JwtHelperService();
  private baseUrl : string;
  private modelAiUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl  = "http://localhost:8000/";
    this.modelAiUrl = "modelo/v1";
  }

  responsesTheUser(prompt: string): Observable<any> {
    const body = { prompt };
    return this.http.post<any>(`${this.baseUrl}${this.modelAiUrl}/respuesta-ia/`, body);
  }

}
