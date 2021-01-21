import { Component, OnInit } from '@angular/core';
import { HerosService } from './heros.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: string[];

  constructor(herosservice:HerosService) {
    this.hero = herosservice.gethero();
   }

  ngOnInit(): void {

  }

}
