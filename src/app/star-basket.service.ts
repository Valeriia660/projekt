import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarBasketService {

  constructor() { }

  stars: any[] = [];
  baskets: any[] = [];
}
