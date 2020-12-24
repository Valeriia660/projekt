import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt';

  constructor(private router: Router) { }

  goToMain() {
    this.router.navigate([""]);
  }

  goToBasket() {
    this.router.navigate(["/basket"]);
  }

  goToStar() {
    this.router.navigate(["/star"]);
  }

  goToDoc() {
    this.router.navigate(["/doc"]);
  }
}
