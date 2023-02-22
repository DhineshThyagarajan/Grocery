import { model, Schema } from "mongoose";
export interface grocery{
  id:string;
  name:string;
  price:number;
  tags:string[];
  favorite:boolean;
  stars:number;
  imageURl:string;
  origins:string[];
}

export const GrocerySchema = new Schema<grocery>(
   {  name: {type:String, required:true},
   price: {type:Number, required:true},
   tags: {type:[String], required:true},
   favorite: {type:Boolean, required:true},
   stars: {type:Number, required:true},
   imageURl: {type:String, required:true},
   origins: {type:[String], required:true},




},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true

}
);

export const  GroceryModel = model<grocery>('groce',GrocerySchema)