/**
 * Created by robertmcbryde on 31/01/2017.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import {HeroService} from "./hero.service";

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
      this.getHeroes();
    }

    private getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
