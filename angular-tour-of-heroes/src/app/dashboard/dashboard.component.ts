import { HeroService } from './../heroes/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private HeroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes() {
    this.HeroService.getHeroes().subscribe((heroes: any) => this.heroes = heroes);
  }

}
