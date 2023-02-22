import{model,Schema,Types} from 'mongoose';
import { OrderStatus} from '../constant/order_status';
import { grocery,GrocerySchema} from './grocery.model';

export interface LatLng{
    lat: string;
    lng: string;
}

export const LatLngSchema = new Schema<LatLng>(
    {
        lat:{type:String, required: true},
        lng:{type: String, required: true},
    }
);
export  interface OrderItem{
    Grocery: grocery;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>({
    Grocery:{type: GrocerySchema,required: true},
    price:{type:Number, required:true},
    quantity:{type:Number, required: true}
});

export interface Order{
    id:String;
    items: OrderItem[];
    totalPrice:number;
    name: string;
    address: string;
    addressLatLng:LatLng;
    paymentId: string;
    status: OrderStatus;
    user:Types.ObjectId;
    createdAt: string;
    updatedAt:Date;
    
  }

  const orderSchema= new Schema<Order>({
    name:{type: String, required:true},
    address:{type: String, required:true},
    addressLatLng:{type: LatLngSchema, required:true},
    paymentId:{type:String},
    totalPrice: {type: Number, required: true},
    items:{type:[OrderItemSchema],required: true},
    status:{type:String, default: OrderStatus.NEW},
    user: {type: Schema.Types.ObjectId}
  },{
     timestamps: true,
     toJSON:{
        virtuals: true
     },
     toObject:{
        virtuals:true
     }
  });

  export const OrderModel= model('order',orderSchema);