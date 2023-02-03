const {Router}=require("express");
const router= Router();
const {productInCart}=require("../controllers/productInCart.controllers.js");


router.post("/creat",productInCart);


module.exports=router;