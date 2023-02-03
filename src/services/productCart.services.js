const {ProductInCart}=require("../models/");

class productCart {
    static async creat({cartId,productId,quantity,price,status}){
        try {
            const result= await ProductInCart.create({cartId,productId,quantity,price,status})
            return result
            
        } catch (error) {
            throw error
        }

    }

}

module.exports=productCart;