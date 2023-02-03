const productInCart  = require("../routes/productsInCart.routes");
const authrouter=require("./auth.routes")
const product=require("./products.routes")
const Cart=require("./cart.routes")
const order=require("./order.routes")

const routerApi= (app) =>{
    app.use("/api/v1/auth", authrouter);
    app.use("/api/v1/products",product);
    app.use("/api/v1/Cart",Cart);
    app.use("/api/v1/productsInCart",productInCart)
    app.use("/api/v1/order",order)

}

module.exports=routerApi;
