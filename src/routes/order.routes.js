const {Router}=require("express");
const router=Router();
const {creatOrder}=require("../controllers/order.controllers.js");

router.post("/", creatOrder);

module.exports=router;

