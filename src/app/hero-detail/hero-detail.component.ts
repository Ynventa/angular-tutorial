import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero'
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
	private route: ActivatedRoute, //The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent
	private heroService: HeroService, //The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display
	private location: Location //The location is an Angular service for interacting with the browser. 
  	) { }

  //You used the @Input decorator to make the hero property available for binding by the external HeroesComponent
  @Input() hero: Hero;

  ngOnInit() {
  	this.getHero();
  }

	goBack(): void {
	  this.location.back();
	}
	getHero(): void {
	  const id = +this.route.snapshot.paramMap.get('id'); //The route.snapshot is a static image of the route information shortly after the component was created. The paramMap is a dictionary of route parameter values extracted from the URL. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
	  this.heroService.getHero(id).subscribe(hero => this.hero = hero);
	}

}
