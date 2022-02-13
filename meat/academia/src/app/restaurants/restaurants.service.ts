import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//@Injectable()
export class RestaurantsService{

    rests: Restaurant[] = [
        {
        id: "Restaurante Bom",
        name:"Restaurante Bom",
        category: "Pratos",
        delivery: "10",
        rate: 4.9,
        imagePath: "app/restaurants/restaurant/icones/restaurant1.png" 
        }]
   // http: any;

    //    constructor(http: HttpClient){}
    constructor(){}

    restaurants(): Restaurant[] {
        return this.rests;
    }
   /* restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`).map((response: { json: () => any; }) => response.json()).catch(ErrorHandler.handleError)
    }*/
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