const {Router}=require("express");
const router=Router();
const {creatOrder, getOrder,getIdOrder,deleteOrder}=require("../controllers/order.controllers.js");

router.post("/", creatOrder);
router.delete("/:id",deleteOrder)
router.get("/",getOrder);
router.get("/:id",getIdOrder);


module.exports=router;

