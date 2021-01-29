import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelsService } from '../models.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  models: any[] = [] 
  
  constructor(private router: Router, private modelsService: ModelsService) {
    this.models = this.modelsService.telescopes
    this.models.push(...this.modelsService.microscopes)
   }

  ngOnInit(): void {
  }

}
