import {Router} from 'express';
import { sample_grocery, sample_tags} from '../data';
import asyncHandler from 'express-async-handler';
import { GroceryModel } from '../models/grocery.model';

const router = Router();
router.get("/seed", asyncHandler( 
    async (req, res)=>{
    const  groceryCount = await GroceryModel.countDocuments();
    if(groceryCount>0){
        res.send("Seed is already done!");
        return;
    }
    await GroceryModel.create(sample_grocery);
    res.send("Seed is Done!");
}))

router.get("/", asyncHandler(
    async (req, res)=>{
    const Grocery = await GroceryModel.find();
    res.send(Grocery);
}))
router.get("/tags", asyncHandler(async (req, res)=>{
    const tags= await GroceryModel.aggregate([
        {
            $unwind:'$tags'
        },
        {
            $group:{
                _id: '$tags',
                count: {$sum: 1}
            }
        },
        {
            $project:{
                _id:0,
                name:'$_id',
                count: '$count'
            }
        }
    ]).sort({count: -1})
    const all ={
        name:'All',
        count: await GroceryModel.countDocuments()
    }
    tags.unshift(all);
    res.send(tags);
}))
router.get("/search/:searchTerm", asyncHandler(
    async (req,res) =>{
        const searchRegex= new RegExp(req.params.searchTerm,'i');
        const Grocery= await GroceryModel.find({name:{$regex:searchRegex}})
        res.send(Grocery);
    }
))
router.get("/tags/:tag",asyncHandler(
    async(req,res) =>{
        const tagres=await GroceryModel.find({
            tags: req.params.tag
        })
        res.send(tagres);
    
}))
router.get("/:groceryid",asyncHandler(async(req,res) =>{
    const Grocres= await GroceryModel.findById(req.params.groceryid)
      res.send(Grocres);
  }))

export default router;