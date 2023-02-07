const {Router}=require("express");
const router=Router();
const {creatOrder, getOrder,getIdOrder,deleteOrder}=require("../controllers/order.controllers.js");

/**
 * @openapi
 * /api/v1/order/:
 *   post:
 *     sumary: created new cart
 *     tags: [Order]
 *     requestBody:
 *       description: Require fields to create a new order
 *       required: true
 *       content: 
 *         aplication/json:
 *           schema:
 *             $ref: "#/components/schemas/order"
 *     responses:
 *        201:
 *          description: ok
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: order created
 *   get:
 *     tags: [Order]
 *     sumary: get order
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *            application/json:
 *              schema:
 *                type: array
 */


router.post("/", creatOrder);
router.delete("/:id",deleteOrder)
router.get("/",getOrder);
router.get("/:id",getIdOrder);


module.exports=router;

