import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { Cartitem } from 'src/app/shared/models/Cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart) =>{
      this.cart=cart;

    })
  }
ngOnInit(): void{
}
removeFromCart(cartItem:Cartitem){
  this.cartService.removeFromCart(cartItem.Grocery.id);
}

changeQuantity(cartItem:Cartitem,quantityInString:string){
  const quantity= parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.Grocery.id,quantity);
}

}
