
const productCart=require("../services/productCart.services");

const productInCart = async (req,res)=>{
   try {
    const product= req.body;
    const result= await productCart.creat(product);
    res.status(201).json(result)
    
   } catch (error) {
     res.status(400).json(error.message)
   }


}

module.exports={
    productInCart,
}