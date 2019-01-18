import { Component, OnInit, Input } from '@angular/core';
import { OrderSummaryService} from '../../order-summary.service';
import { OrderTotalService } from '../../order-total.service';
import { OrdersListService } from '../../orders-list.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orders:OrdersListService, private summaryService: OrderSummaryService, private orderTotalService: OrderTotalService) { }

  ngOnInit() {
  }

}
