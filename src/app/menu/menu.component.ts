// menu.component.ts
import { Component, OnInit } from '@angular/core';

// import services here...
import {MenuListService} from '../menu-list.service';
import {OrdersListService} from '../orders-list.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService:MenuListService, private orders:OrdersListService) { }

  ngOnInit() {
  }
} // this bracket is the end of the class! nothing goes below here!