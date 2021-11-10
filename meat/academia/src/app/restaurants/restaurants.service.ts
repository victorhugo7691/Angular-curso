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

/*import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import { Observable } from "rxjs/internal/Observable";
import 'rxjs/add/operator/map'
import { HtmlAstPath } from "@angular/compiler";

@Injectable()
export class RestaurantsService{
    constructor(private http: HtmlAstPath){}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
    }
}*/