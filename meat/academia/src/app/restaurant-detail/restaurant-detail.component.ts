import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
  selector: 'jad-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant | undefined;

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.restaurantService.restaurants;
  }

}
