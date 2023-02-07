const {Router}=require("express");
const { getProducts,creatProducts,getIdProduct,deleteId/*updateProduct,*/}=require("../controllers/product.controllers");
const router=Router();


router.get("/",getProducts);
router.get("/:id",getIdProduct);
router.delete("/:id",deleteId);
router.post("/",creatProducts);
/*router.put("/",updateProduct);*/



module.exports=router;