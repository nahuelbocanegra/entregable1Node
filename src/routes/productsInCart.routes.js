const {Router}=require("express");
const router= Router();
const {productInCart,getcartProducts,getcartIdProducts,deleteId}=require("../controllers/productInCart.controllers.js");


router.post("/creat",productInCart);
router.get("/",getcartProducts);
router.get("/:id",getcartIdProducts);
router.delete("/:id",deleteId);


module.exports=router;