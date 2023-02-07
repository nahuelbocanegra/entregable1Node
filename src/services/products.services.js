

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
    static async getId(id){
        try {
            const result= await product.findByPk({where:{id}})
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async delete(id){
        try {
            const result= await product.destroy({where:{id}})
            return result;
        } catch (error) {
            throw error;
        }
    }
    /** static async update(id,updateProduct){
        try {
            const result= await product.({where:{id}})
            return result;
        } catch (error) {
            throw error;
        }
    }*/
};


module.exports=procuctServices;