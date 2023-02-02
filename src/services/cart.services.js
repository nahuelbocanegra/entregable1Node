const {cart}=require("../models/index");

class cartServices{
    static async addProductCart(product){
        try {
            const result= cart.create(product)
            return result;
            
        } catch (error) {
            throw error;
        }

    }
}
module.exports=cartServices;