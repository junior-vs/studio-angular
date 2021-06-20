import { MessageService } from './../messages/message.service';
import { HEROES } from './../mocks/mock-heroes';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hero } from './hero';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url = 'http://localhost:3000/heroes';

  constructor(private httpCliente: HttpClient, private messageService: MessageService) {
    //
  }

  getHeroes(): Observable<Hero> {
    {
      this.messageService.add('Buscando heroes no servidor - GET')
      return this.httpCliente.get<Hero>(this.url);
    }
  }
}
