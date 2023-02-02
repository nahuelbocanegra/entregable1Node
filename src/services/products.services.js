

const { product }=require("../models/index")
const {Op}=require("sequelize");

class procuctServices {
    static async allProduct(){
        try {
            const result=  await product.findAll({where:{
                availableQty:{[Op.gt]:0}}});
            return result;
            
        } catch (error) {
            throw error
        }
    }
    static async productCreate(pro){
        try {
            const result = await product.create(pro)
            return result;
        } catch (error) {
            throw error;
            
        }
    }

};
/*{where:{
                quantity:{[op.gt]:0}
            }} */

module.exports=procuctServices;