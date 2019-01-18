import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderTotalService {

  constructor() { }

  calcOrderTotal(orders){

    let total: number = 0;

    for(let order of orders){

      total+= order.drinkPrice;
    }

    return total;
  }

}
