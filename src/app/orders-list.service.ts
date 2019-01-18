import { Injectable } from '@angular/core';

// define what makes an Order and Order...
export interface Order{
  drinkType: string;
  drinkPrice: number;
  specialInstructions: string;
}
@Injectable({
  providedIn: 'root'
})
export class OrdersListService {

  constructor() { }

  // this is the service class...
  // here we will add the functionality for the orders array

  // we want to use an array to store info about drink orders
  // define an empty array that can hold Order objects
  orders: Order[] = [];
  instructions:string = 'No special instructions';
  // create an object to keep track of the number of drinks
  numDrinks = {
    numCoffee: 0,
    numLatte: 0,
    numTea: 0
  }

    
    addDrink(newDrink){
      console.log("A coffee has been added.....");
  
      // add a new Order into the orders array
      this.orders.push({
        drinkType: newDrink.drinkName,
        drinkPrice: newDrink.drinkPrice,
        specialInstructions: this.instructions
      });
  
      // clear the instructions property
      this.instructions = "No Special Instructions";
    }

}
