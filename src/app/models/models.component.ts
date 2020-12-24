import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  constructor(private router: Router) { }

  goToBasket() {
    this.router.navigate(["/basket"]);
  }

  ngOnInit(): void {
  }

}
