import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// component imports
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './menu/order/order.component';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';

// service imports
import { MenuListService } from './menu-list.service';
import { OrderSummaryService } from './order-summary.service';
import { OrderTotalService } from './order-total.service';
import { OrdersListService } from './orders-list.service';
import { PurchaseListService } from './purchase-list.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    PurchaseFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    MenuListService,
    OrderSummaryService,
    OrderTotalService,
    OrdersListService,
    PurchaseListService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
