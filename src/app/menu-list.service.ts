import { Injectable } from '@angular/core';

export interface DrinkItem {
  drinkName: string;
  drinkPrice: number;
  numCalories: number;
  gluten: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor() { }

  menu: DrinkItem[]  = [
    {
      drinkName: 'Dark Roast Decaf Coffee',
      drinkPrice: 2.50,
      numCalories: 5,
      gluten: false  
    },
    {
      drinkName: 'Gingerbread Vanilla Latte',
      drinkPrice: 4.50,
      numCalories: 200,
      gluten: true  
    }, 
    {
      drinkName: 'English Breakfast Tea',
      drinkPrice: 2.00,
      numCalories: 5,
      gluten: false  
    }, 
    {
      drinkName: 'Monster Ultra Zero - Energy Drink',
      drinkPrice: 3.50,
      numCalories: 0,
      gluten: false  
    }, 
    {
      drinkName: 'Cafe Americano',
      drinkPrice: 2.50,
      numCalories: 5,
      gluten: false  
    }
  
  
  ];
}