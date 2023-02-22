import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { GroceryService } from 'src/app/services/grocery.service';
import { grocery } from 'src/app/shared/models/grocery';

@Component({
  selector: 'app-grocery-page',
  templateUrl: './grocery-page.component.html',
  styleUrls: ['./grocery-page.component.css']
})
export class GroceryPageComponent implements OnInit  {
 Grocery!:grocery
 constructor(activatedRoute:ActivatedRoute, groceryService:GroceryService,
  private cartService:CartService,private router:Router)
 {
   activatedRoute.params.subscribe((params)=>{
    if(params.id)
    groceryService.getGroceryById(params.id).subscribe(serverGrocery =>{
      this.Grocery=serverGrocery;
    });
   });
 }

 ngOnInit(): void{

 }
 addToCart()
 {
  this.cartService.addToCart(this.Grocery);

  this.router.navigateByUrl('/cart-page');

 }

}
