import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModelsService } from '../models.service';
import { StarBasketService } from '../star-basket.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  models: any[] = []
  stars: any[];
  baskets: any[];
  sub: Subscription;
  constructor(private router: Router, private actRouter: ActivatedRoute, private modelsService: ModelsService, private starBasketService: StarBasketService) {
    this.sub = this.actRouter.params.subscribe(p => {
      let number = +p["model_id"];
      if (number === 1) {
        this.models = this.modelsService.telescopes;
      } else if (number === 2) {
        this.models = this.modelsService.microscopes;
      }
    })

    this.stars = this.starBasketService.getList(this.starBasketService.keyStars);
    console.log(this.stars);

    this.baskets = this.starBasketService.getList(this.starBasketService.keyBaskets);
    console.log(this.baskets);
   }

  ngOnInit(): void {
  }

  //goToBasket() {
    //this.router.navigate(["/basket"]);
  //}

  addToStars(model: any): void {
    this.starBasketService.addToStars(model);
  }

  addToBaskets(model: any): void {
    this.starBasketService.baskets.push(model);
    console.log("added to baskets");
  }


}
