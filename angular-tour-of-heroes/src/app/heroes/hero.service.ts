import { HEROES } from './../mocks/mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor() {
    //
  }

  getHeroes(): Hero[] {
    {
      return HEROES;
    }
  }
}
