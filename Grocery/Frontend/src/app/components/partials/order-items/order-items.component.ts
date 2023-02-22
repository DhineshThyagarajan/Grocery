import { Component,Input,OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent  implements OnInit{

  @Input()
  order!:Order;
  constructor(){

  }

  ngOnInit(): void {

  }
}
