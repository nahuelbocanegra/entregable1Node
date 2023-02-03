
const OrderServices= require("../services/order.services.js")
const creatOrder=async (req,res)=>{
 try {
    const order=req.body;
    const result= await OrderServices.creat(order);
    res.status(201).json(result)
    
 } catch (error) {
    res.status(400).json(error.message);
 }
}



module.exports={
 creatOrder
}