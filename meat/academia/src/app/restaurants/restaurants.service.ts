import { Restaurant } from "./restaurant/restaurant.model";

export class RestaurantsService{
    constructor(){}

    rests: Restaurant[] = [{
        id: "Restaurante Bom",
        name:"Restaurante Bom",
        category: "Pratos",
        delivery: "10",
        rate: 4.9,
        imagePath: "assets" 
        }
      ]

    restaurants(): Restaurant[] {
        return this.rests;
    }
}