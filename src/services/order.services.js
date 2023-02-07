const {Order}=require("../models/");

class OrderServices{
    static async creat (){
       try {
        const result= await Order.create(result) 
        return result
       } catch (error) {
        throw error
       }

    }
    static async get(){
        try {
            const result= await Order.findAll();
            return result
        } catch (error) {
            throw error
        }
    }
    static async delete(id){
        try {
            const result= await Order.destroy({where:{id}})
            return result
        } catch (error) {
            throw error
        }

    }
    static async getId(id){
        try {
            const result= await Order.findByPk({where:{id}})
            return result
        } catch (error) {
            throw error
        }

    }
}

module.exports=OrderServices;