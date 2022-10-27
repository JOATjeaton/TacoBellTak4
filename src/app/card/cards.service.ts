import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cardmodel } from "./cardmodel.model";

@Injectable(
    {providedIn: 'root'}
)

export class CardsService {
    private baseUrl:string = "https://tacobellapp-aad01-default-rtdb.firebaseio.com/";
    private cardsEndPoint:string = "products.json";

    constructor(private http:HttpClient){

    }
    getProducts() {
        return this.http.get<cardmodel []>(this.baseUrl + this.cardsEndPoint);
    }

    getProduct(index:number){
        return this.http.get<cardmodel []>(this.baseUrl+ 'products' + '/' + index + '.json;');
    }
}