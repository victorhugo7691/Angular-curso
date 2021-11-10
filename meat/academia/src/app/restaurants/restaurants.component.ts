import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'jad-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants!: Restaurant[];
  constructor(private restaurantsService:RestaurantsService) { }

  ngOnInit(): void {
    this.restaurants = this.restaurantsService.restaurants();
    //this.restaurants = this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}
