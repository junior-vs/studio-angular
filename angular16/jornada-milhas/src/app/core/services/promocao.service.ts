import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promocao } from '../model/promocao.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PromocaoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPromocoes(): Observable<Promocao[]> {
    return this.http.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }
}
