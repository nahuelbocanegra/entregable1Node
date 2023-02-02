const AuthServices=require("../services/auth.services");
const transporter =require("../utils/mailer");
 
const register = async (req,res)=>{
 try {
    const user=req.body;
    console.log(user)
    const result = await AuthServices.register(user);
    if(result){
       
        res.status(201).json({message:"create user"});
        
        await transporter.sendMail({
          to:result.email,
          from:"nahuboca7@gmail.com",
          subject:"email confirm",
          text:"confirmed",
          html: '<h1>bienvenido,confirma tu mail</h1> <a href="hola">enlace</a>'
        })
         
    }else{
        res.status(400).json({message:"somethign wrong"})
    }
    
}catch(error){
  res.status(400).json(error.message);
}
};

const login= async (req,res)=>{
   try {
    const {email,password}=req.body;
    if(!email){
      res.status(400).json({
        error:"Missing data",
        message: "Not email provided",
      })
    }
    if(!password){
      res.status(400).json({
        error:"Missing data",
        message: "Not password provided",
      })
    }
    const result= await AuthServices.login({email,password});

    if(result.isValid){
      const {id,email}=result.user;
       const userData={id,email};
       const token = AuthServices.genToken(userData);
       userData.token=token;
       console.log(userData)
       res.json(userData);
    }else{
      res.status(400).json("user not found");
    }
    
  }catch (error) {
    res.status(400).json({message:"something wrong"});
  }

};

module.exports={
  register,
  login,
};