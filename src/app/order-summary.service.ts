import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {

  constructor() { }

  createSummary(orders){

    let summaryString: string = `Order Summary: \n`;
 
    for(let order of orders){
        summaryString+= `\n Drink Type: ${order.drinkType} ------ Drink Price: ${order.drinkPrice} ------ Special Instructions: ${order.specialInstructions} \n`
    }
 
    return summaryString;
 }
}
