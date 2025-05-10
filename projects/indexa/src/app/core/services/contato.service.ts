import { Injectable } from '@angular/core';

import { Contato } from '../model/contato';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [
    {
      id: 1,
      nome: 'Ana',
      telefone: '29 278869420',
      email: 'ana@email.com',
      aniversario: '01/01/2000',
      redes: 'Facebook',
      observacoes: 'Amiga de infância',
    },
    {
      id: 2,
      nome: 'Ágata',
      telefone: '38 128451235',
      email: 'agata@email.com',
      aniversario: '02/02/2001',
      redes: 'Instagram',
      observacoes: 'Colega de trabalho',
    },
    {
      id: 3,
      nome: 'Bruno',
      telefone: '95 695521583',
      email: 'bruno@emai.com',
      aniversario: '03/03/2002',
      redes: 'Twitter',
      observacoes: 'Irmão mais novo',
    },
    {
      id: 4,
      nome: 'Beatriz',
      telefone: '25 854986459',
      email: 'beatriz@emai.com',
      aniversario: '04/04/2003',
      redes: 'LinkedIn',
      observacoes: 'Amiga da faculdade',
    },
    {
      id: 5,
      nome: 'Carlos',
      telefone: '94 543197849',
      email: 'carlos@emai.com',
      aniversario: '05/05/2004',
      redes: 'Snapchat',
      observacoes: 'Amigo de infância',
    },
    {
      id: 7,
      nome: 'Daniel',
      telefone: '56 613692441',
      email: 'daniel@emai.com',
      aniversario: '06/06/2005',
      redes: 'WhatsApp',
      observacoes: 'Colega de trabalho',
    },
  ];

  constructor() {

    // limpar o localStorage

    // Verifica se o localStorage já contém contatos



    // Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString
      ? JSON.parse(contatosLocalStorageString)
      : null;

    // Use the default contatos array if localStorage is empty
    this.contatos = contatosLocalStorage || this.contatos;

    // Salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos(): Observable<Contato[]> {
    console.log(this.contatos);
    return of(this.contatos);
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
