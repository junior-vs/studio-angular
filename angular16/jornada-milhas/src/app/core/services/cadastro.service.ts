import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoaUsuaria } from '../model/pessoa-usuaria.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  readonly apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  cadastrarUsuario(pessoaUsuario: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(
      `${this.apiURL}/auth/cadastro`,
      pessoaUsuario
    );
  }
}
