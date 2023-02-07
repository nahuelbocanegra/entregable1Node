const productInOrderServices= require("../services/productInOrden.services")


const creatProductInOrder= async (req,res) =>{
 try {
    const order= req.body;
    const result = await productInOrderServices.creat(order)
    res.status(201).json(result)
 } catch (error) {
    res.status(400).json(error.message)
 }

}
const getProductInOrder  = async (req,res)=>{
   try {
      const result= await productInOrderServices.get();
      res.status(200).json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}
const getProductIdOrder = async (req,res)=>{
   try {
      const {id}=req.params;
      const result= await productInOrderServices.getId(id);
      res.status(200).json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

module.exports={
    creatProductInOrder,
    getProductInOrder,
    getProductIdOrder
}