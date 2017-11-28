import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  heroes: Hero[];
/*
  selectedHero: Hero;
  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }
  */
/*
  getHeroes(): void {
  	this.heroes = this.heroService.getHeroes()
  }
*/

	getHeroes(): void {
		this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
	}

  //The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
  	this.getHeroes();
  }

}
