const {Router}=require("express");
const {productCart,getCart,getIdCart,destroy}=require("../controllers/cart.controllers")
const router = Router();



/**
 * @openapi
 * /api/v1/cart/:
 *   post:
 *     sumary: created new cart
 *     tags: [Cart]
 *     requestBody:
 *       description: Require fields to create a new cart
 *       required: true
 *       content: 
 *         aplication/json:
 *           schema:
 *             $ref: "#/components/schemas/cart"
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
 *                    example: card created
 *        400:
 *          description: Validation error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: validation error
 *   get:
 *     tags: [Cart]
 *     sumary: get Carts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *            application/json:
 *              schema:
 *                type: array
 */

router.delete("/:id",destroy);
router.post("/",productCart);
router.get("/",getCart);
router.get("/:id",getIdCart);

module.exports=router;