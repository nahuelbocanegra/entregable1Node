 const bcrypt=require("bcrypt");
 const jwt=require("jsonwebtoken");
 require("dotenv").config();
 const models=require("../models/index")

const {users}=models;

 class AuthServices{
    static async register(user){
        try {
            const result=  await users.create(user);
            return result;
        } catch (error) {
            throw error;
        }

    };
    
    static async login (credenetials){
        console.log(credenetials)
       
        try {
            const {email,password}=credenetials;
            const user = await users.findOne({where:{email}});
            console.log(user)
            if(user){
              const isValid= bcrypt.compareSync(password,user.password);
               return isValid  ? {isValid,user}:{isValid};
            }else{
               return {isValid:false};
            } 
        } catch (error) {
            throw error
        }

    };
    static genToken (data){
        try {
            const token=jwt.sign(data,process.env.JWT_SECRET,{
                expiresIn:"10m",
                algorithm:"HS512"
            });
            console.log(token)
            return token;
        } catch (error) {
            throw error;
        }

    }
 }

 module.exports=AuthServices;