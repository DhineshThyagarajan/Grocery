import { grocery } from "./grocery";

export class Cartitem{

   constructor(public Grocery:grocery)
   {

   }
     quantity:number=1;
     price: number=this.Grocery.price;


}
