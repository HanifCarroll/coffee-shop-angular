import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
interface Purchase {
  name: String;
  address: String;
  apartmentNumber: String;
  creditCardNumber: String;
  expirationDate: String;
}

export class PurchaseListService {
  constructor() {}

  purchases: Purchase[] = [];

  addPurchase(purchase: Purchase, total: Number) {
    const newPurchase = { total, ...purchase };

    this.purchases.push(newPurchase);
    console.log(this.purchases);
  }
}
