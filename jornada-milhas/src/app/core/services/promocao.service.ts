import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../models/promocao.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  readonly api = environment.apiUrl;


  constructor(private httpClient: HttpClient) { }

  listar () : Observable<Promocao[]> {
    return this.httpClient.get<Promocao[]>(`${this.api}/promocoes`);
  }
}
