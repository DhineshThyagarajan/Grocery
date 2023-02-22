import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { Cartitem } from '../shared/models/Cartitem';
import { grocery } from '../shared/models/grocery';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart>= new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(Grocery:grocery):void{
    let cartItem= this.cart.items.find(item => item.Grocery.id === Grocery.id)
    if(cartItem)
    return;

    this.cart.items.push(new Cartitem(Grocery));
    this.setCartToLocalStorage();
  }
  removeFromCart(GroceryId: string): void{
    this.cart.items=this.cart.items.filter(item => item.Grocery.id != GroceryId);
    this.setCartToLocalStorage();

  }
  changeQuantity(GroceryId: string, quantity: number){
    let cartItem= this.cart.items.find(item => item.Grocery.id === GroceryId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
    cartItem.price=quantity * cartItem.Grocery.price;
    this.setCartToLocalStorage();

  }
  clearCart(){
    this.cart=new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
     return this.cartSubject.asObservable();
  }
  getCart(){
    return this.cartSubject.value;
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice= this.cart.items.reduce((prevSum,currentItem)=> prevSum + currentItem.price,0)
    this.cart.totalCount=this.cart.items.reduce((prevSum,currentItem)=> prevSum + currentItem.quantity,0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }
  private getCartFromLocalStorage():Cart{
     const cartJson=localStorage.getItem('Cart');
     return cartJson? JSON.parse(cartJson): new Cart();

  }
}
