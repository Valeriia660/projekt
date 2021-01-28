import { Component, OnInit } from '@angular/core';
import { StarBasketService } from '../star-basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  baskets: any[];
  constructor(private starBasketService: StarBasketService) {
    this.baskets = this.starBasketService.baskets;
  }

  ngOnInit(): void {
  }

  removeFromBaskets(model: any): void {
    const index = this.starBasketService.baskets.indexOf(model, 0);
    if (index > -1) {
      this.starBasketService.baskets.splice(index, 1);
    }
    this.baskets = this.starBasketService.baskets;
  }

  addToStars(model: any): void {
    this.starBasketService.stars.push(model);
    console.log("added to stars");
  }
}
