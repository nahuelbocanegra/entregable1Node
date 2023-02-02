
const cartServices= require("../services/cart.services")
const productCart = async (req,res)=>{
    try {
        const product= req.body;
        const result = await cartServices.addProductCart(product)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }

}

module.exports={
    productCart
}