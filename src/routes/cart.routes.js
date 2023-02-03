const {Router}=require("express");
const {productCart}=require("../controllers/cart.controllers")
const router = Router();



/**
 * @openapi
 * /api/v1/auth/register:
 */

router.post("/",productCart);

module.exports=router;