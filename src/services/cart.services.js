const {cart}=require("../models/index");

class cartServices{
    static async addCart({userId,totalPrice}){
        try {
            const result= cart.create({userId,totalPrice})
            return result;
            
        } catch (error) {
            throw error;
        }

    }
}
module.exports=cartServices;