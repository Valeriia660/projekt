import { Component, OnInit } from '@angular/core';
import { StarBasketService } from '../star-basket.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  stars: any[];
  constructor(private starBasketService: StarBasketService) {
    this.stars = this.starBasketService.getList(this.starBasketService.keyStars);
    console.log(this.stars);
    
  }
  

  ngOnInit(): void {
  }

  removeFromStars(model: any): void {
    this.starBasketService.removeFromStars(model);
    this.stars = this.starBasketService.getList(this.starBasketService.keyStars);
  }

  addToBaskets(model: any): void {
    this.starBasketService.baskets.push(model);
    console.log("added to baskets");
  }
}
