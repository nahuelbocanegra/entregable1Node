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
    static async get(){
      try {
         const result= await ProductInOrder.findAll();
         return result
      } catch (error) {
         throw error
      }
    }
    static async getId(id){
      try {
         const result= await ProductInOrder.findByPk({where:{id}});
         return result
      } catch (error) {
         throw error
      }
    }
}

module.exports=productInOrderServices;