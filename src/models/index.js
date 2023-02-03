const InitModels= require("./init-models");
const db= require("../utils/database");

const models=InitModels(db);

const {cart,Order,product,ProductInCart,ProductInOrder,users}=models;

module.exports=models;
