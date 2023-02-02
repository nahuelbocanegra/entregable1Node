const InitModels= require("./init-models");
const db= require("../utils/database");

const models=InitModels(db);

module.exports=models;
