import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'jad-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [{
    id: "Restaurante Bom",
    name:"Restaurante Bom",
    category: "Pratos",
    delivery: "10",
    rate: 4.9,
    imagePath: "assets" 
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
