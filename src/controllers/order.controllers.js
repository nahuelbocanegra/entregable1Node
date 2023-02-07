
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
const getOrder = async (req,res)=>{
   try {
      const result= await OrderServices.get();
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json(error.message);
   }
}
const getIdOrder   =  async (req,res)=>{
  try {
   const {id}=req.params;
   const result= await OrderServices.getId(id)
  } catch (error) {
   res.status(200).json(error.message);
  }
}
 const deleteOrder = async (req,res )=>{
 try {
   const {id}=req.params;
   const result= await OrderServices.delete(id)
 } catch (error) {
   res.status(200).json(error.message);
 }
}



module.exports={
 creatOrder,
 getOrder,
 deleteOrder,
 getIdOrder,
}