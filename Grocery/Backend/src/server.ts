import dotenv from 'dotenv';
dotenv.config();
import express from  "express"
import cors from "cors";
import groceryRouter from './routers/grocery.router';
import userRouter from "./routers/user.router";
import orderRouter from './routers/order.router';
import { dbConnect } from './configs/database.config';
dbConnect();
const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4201"]
}));

app.use("/api/grocery",groceryRouter);

app.use("/api/users",userRouter);
app.use("/api/orders",orderRouter);

const port=5009;
app.listen(port,()=>{
    console.log("website served on http://localhost:"+port);
})