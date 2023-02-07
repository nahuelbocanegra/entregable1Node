// registro
//login
const {Router}=require("express");
const {register,login,user,IdUser}=require("../controllers/auth.controllers");




const router=Router();

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     sumary: created a new user
 *     tags: [Auth]
 *     requestBody:
 *       description: Require fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
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
 *                     example: user created
 *         400:
 *           description: Validation error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: validation error
 * /api/v1/auth/login:
 *   post:
 *     sumary: Login an existing user into the app
 *     tags: [Auth]
 *     requestBody:
 *       description: Require fields to login user
 *       required: true
 *       content:
 *         aplication/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *             $ref: "#/components/schemas/loginResponse"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not found
 */

router.post("/register",register);
router.post("/login",login);
router.get("/register/user",user);
router.get("/register/user/:id",IdUser);



module.exports=router;