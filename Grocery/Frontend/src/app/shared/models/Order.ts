import { LatLng } from "leaflet";
import { Cartitem } from "./Cartitem";

export class Order{
  id!:number;
  items!: Cartitem[];
  totalPrice!:number;
  name!: string;
  address!: string;
  addressLatLng?:LatLng;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
