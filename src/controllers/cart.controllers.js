
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

module.exports={
    productCart
}