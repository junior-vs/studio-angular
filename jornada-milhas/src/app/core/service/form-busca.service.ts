import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor() {
    this.formBusca = new FormGroup({
      origem: new FormGroup({}),
      destino: new FormGroup({}),
      dataIda: new FormGroup({}),
      dataVolta: new FormGroup({}),
      adultos: new FormGroup({}),
      criancas: new FormGroup({}),
      bebe: new FormGroup({})
    });
   }
}
