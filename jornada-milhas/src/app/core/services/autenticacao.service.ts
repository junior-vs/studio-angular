import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  readonly apiUrl = `${environment.apiUrl}/auth/login`;
  
  constructor(private http:HttpClient) { }

  autenticar(email: string, senha: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, senha });
  }


}
