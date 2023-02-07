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
    static async get (){
        try {
            const result= await ProductInCart.findAll();
            return result
        } catch (error) {
            throw error;
        }
    }
    static async getId (id){
        try {
            const result= await ProductInCart.findByPk({where:{id}});
            return result
        } catch (error) {
            throw error;
        }
    }
    static async deleteId (id){
        try {
            const result= await ProductInCart.destroy({where:{id}});
            return result
        } catch (error) {
            throw error;
        }
    }

}

module.exports=productCart;