const {Router}=require("express");
const router=Router();
const {creatProductInOrder,getProductInOrder,getProductIdOrder}=require("../controllers/productInOrder.controllers");

router.post("/",creatProductInOrder);
router.get("/:id",getProductIdOrder);
router.get("/",getProductInOrder);


module.exports= router;
