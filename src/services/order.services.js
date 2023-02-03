const {Order}=require("../models/");

class OrderServices{
    static async creat (){
       try {
        const result= await Order.create(result) 
       } catch (error) {
        throw error
       }

    }
}

module.exports=OrderServices;