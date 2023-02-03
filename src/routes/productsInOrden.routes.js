const {Router}=require("express");
const router=Router();
const {creatProductInOrder}=require("../controllers/productInOrder.js");

router.post("/",creatProductInOrder);