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
    this.stars = this.starBasketService.stars;
  }

  ngOnInit(): void {
  }

  removeFromStars(model: any): void {
    const index = this.starBasketService.stars.indexOf(model, 0);
    if (index > -1) {
      this.starBasketService.stars.splice(index, 1);
    }
    this.stars = this.starBasketService.stars;
  }

}
