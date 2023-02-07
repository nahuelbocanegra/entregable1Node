const {Router}=require("express");
const { getProducts,creatProducts,getIdProduct,deleteId,updateProduct}=require("../controllers/product.controllers");
const router=Router();
/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     sumary: created a new product
 *     tags: [Product]
 *     requestBody:
 *       description: Require fields to create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/product'
 *     responses:
 *         201:
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: product created
 *   get:
 *     tags: [Product]
 *     sumary: get order
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *            application/json:
 *              schema:
 *                type: array
 */

router.get("/",getProducts);
router.get("/:id",getIdProduct);
router.delete("/:id",deleteId);
router.post("/",creatProducts);
router.put("/",updateProduct);



module.exports=router;