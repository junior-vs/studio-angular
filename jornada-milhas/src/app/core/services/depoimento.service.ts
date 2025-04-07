import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PessoaUsuaria } from '../models/pessoa-usuaria.model';
import { Observable } from 'rxjs';
import { Depoimento } from '../models/depoimento.model';

@Injectable({
  providedIn: 'root',
})
export class DepoimentoService {
  readonly apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
