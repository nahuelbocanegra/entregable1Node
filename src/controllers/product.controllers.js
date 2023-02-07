const productServices=require("../services/products.services");

const getProducts= async (req,res)=>{
 try {
    const result= await productServices.allProduct();
    res.status(200).json(result);
 } catch (error) {
    res.status(400).json(error.message)
 }
}
const creatProducts = async (req,res)=>{
    try {
        const product = req.body;
        const result= await productServices.productCreate(product);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);  
    }
}
const getIdProduct = async (req,res) =>{
    try {
       const {id}= req.params;
        const result = await productServices.getId(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const deleteId = async (req,res)=>{
  try {
    const {id}= req.params;
    const result = await productServices.delete(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const updateProduct= async (req,res)=>{
    try {
    const {id}= req.params;
    const updateProduct= req.body;
    const result = await productServices.update(id,updateProduct)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports={
    getProducts,
    creatProducts,
    getIdProduct,
    deleteId,
    /*updateProduct,*/
}