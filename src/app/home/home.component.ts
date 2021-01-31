import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelsService } from '../models.service';
import { StarBasketService } from '../star-basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  models: any[] = []
  stars: any[];
  baskets: any[];

  constructor(private router: Router, private modelsService: ModelsService, private starBasketService: StarBasketService) {    
    this.models.push(...this.modelsService.telescopes);
    this.models.push(...this.modelsService.microscopes);
    this.models.push(...this.modelsService.binoculares);
    this.models.push(...this.modelsService.trumpets);
    this.models.push(...this.modelsService.shtatives);
    this.models.push(...this.modelsService.loupes);
    this.models.push(...this.modelsService.others);

    this.stars = this.starBasketService.getList(this.starBasketService.keyStars);
    console.log(this.stars);

    this.baskets = this.starBasketService.getList(this.starBasketService.keyBaskets);
    console.log(this.baskets);
  }


  ngOnInit(): void {
  }

  addToStars(model: any): void {
    this.starBasketService.addToStars(model);
  }

  addToBaskets(model: any): void {
    this.starBasketService.baskets.push(model);
    console.log("added to baskets");
  }
}
