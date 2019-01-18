import { Component, OnInit } from '@angular/core';
import { OrdersListService } from '../orders-list.service';
import { PurchaseListService } from '../purchase-list.service';
import { OrderTotalService } from '../order-total.service';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css'],
})
export class PurchaseFormComponent implements OnInit {
  constructor(
    private orders: OrdersListService,
    private purchaseList: PurchaseListService,
    private orderTotalService: OrderTotalService,
  ) {}

  ngOnInit() {}
}
