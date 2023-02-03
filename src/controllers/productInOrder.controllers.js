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

module.exports={
    creatProductInOrder
}