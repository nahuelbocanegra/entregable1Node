
const productCartServices=require("../services/productCart.services");

const productInCart = async (req,res)=>{
   try {
    const product= req.body;
    const result= await productCartServices.creat(product);
    res.status(201).json(result)
    
   } catch (error) {
     res.status(400).json(error.message)
   }


}
 const getcartProducts  = async(req,res)=>{
  try {
    const result= await  productCartServices.get();
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
 }
 const getcartIdProducts = async(req,res)=>{
  try {
    const {id}=req.params;
    const result= await  productCartServices.getId(id);
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
 }
 const deleteId = async(req,res)=>{
  try {
    const {id}=req.params;
    const result= await productCartServices.delete(id);
    res.status(200).json(result) 
  } catch (error) {
    res.status(400).json(error.message)
  }
 }
module.exports={
    productInCart,
    getcartProducts,
    getcartIdProducts,
    deleteId
}