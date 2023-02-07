const {cart}=require("../models/index");

class cartServices{
    static async addCart({userId,totalPrice}){
        try {
            const result= await cart.create({userId,totalPrice})
            return result;
            
        } catch (error) {
            throw error;
        }
    }
    static async get(){
        try {
            const result= await cart.findAll();
            return result
        } catch (error) {
            throw error
        }
    }
    static async getId(id){
        try {
            const result= await cart.findByPk({where:{id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async delete(id){
        try {
            const result= await cart.destroy({where:{id}});
            return result;
        } catch (error) {
            throw error
        }
    }
}
module.exports=cartServices;