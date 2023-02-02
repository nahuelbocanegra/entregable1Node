const authrouter=require("./auth.routes")
const product=require("./products.routes")

const routerApi= (app) =>{
    app.use("/api/v1/auth", authrouter);
    app.use("/api/v1/products",product);
}

module.exports=routerApi;
