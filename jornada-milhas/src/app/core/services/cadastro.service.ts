import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PessoaUsuaria } from '../models/pessoa-usuaria.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  readonly URL = `${environment.apiUrl}`;

  constructor(private http:HttpClient) { }

  cadastrarUsuario(usuario: PessoaUsuaria) {
    return this.http.post<PessoaUsuaria>(`${this.URL}/usuarios`, usuario);
  }

}
