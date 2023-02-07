
const cartServices= require("../services/cart.services")
const productCart = async (req,res)=>{
    try {
        const cart= req.body;
        const result = await cartServices.addCart(cart)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }

}
const getCart = async (req,res)=>{
 try {
    const result= await cartServices.get();
    res.status(200).json(result)
 } catch (error) {
    
 }

}
const getIdCart= async (req,res)=>{
    try {
        const {id}=req.params;
        const result = await cartServices.getId(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }


}
const destroy= async (req,res)=>{
    try {
        const {id}=req.params;
        const result= await cartServices.delete(id);
        res.status(200).status(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports={
    productCart,
    getCart,
    getIdCart,
    destroy,
}