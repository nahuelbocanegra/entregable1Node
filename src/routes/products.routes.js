const {Router}=require("express");
const { getProducts,creatProducts}=require("../controllers/product.controllers");
const router=Router();


router.get("/",getProducts);
/*
router.get("/:id",getIdProduct);*/
router.post("/",creatProducts);



module.exports=router;