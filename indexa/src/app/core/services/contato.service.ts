import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import agenda from './../../../agenda.json';
import { Observable, of } from 'rxjs';
import { Contato } from '../model/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  getContatos() :Observable<Contato[]>{
    return of(agenda as Contato[]);
  }
}
