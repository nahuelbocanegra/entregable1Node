const {ProductInOrder}=require("../models/index")


class productInOrderServices{
    static async creat(product){
     try {
        const result= await ProductInOrder.create(product);
        return result;
     } catch (error) {
        throw error;
     }
    }
}

module.exports=productInOrderServices;