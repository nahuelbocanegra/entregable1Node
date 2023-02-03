const db= require("../utils/database");
const {cart,Order,product,ProductInCart,ProductInOrder,users}=require("../models/index");


const user=[
{username:"nahu1",email:"Nahuboca71@gmail.com",password:"123456"},
{username:"nahu2",email:"Nahuboca72@gmail.com",password:"123456"},
{username:"nahu3",email:"Nahuboca73@gmail.com",password:"123456"}
];

db.sync()
.then(()=>{
    console.log("iniciando")
    user.forEach((element)=>users.create(element))
}).catch(error=>{console.log(error)});

