import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  title = 'Everyday Heroes';

  @Input() heroes: Hero[] = this.heroService.getAll();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

}
