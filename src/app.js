const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const app = express();
const routerApi=require("./routes/index")
const transporter=require("./utils/mailer");




app.use(express.json());
app.use(cors());
app.use(morgan("tyne"));

routerApi(app);



module.exports = app;
