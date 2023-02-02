
//importamos los paquetes de swagger que instalamos
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
	apis:["./src/routes/auth.routes.js","./src/models/users.js"],
    definition: {
      openapi: "3.0.0",
      info: {
              title: "ecommerce api",
              version: "0.0.9",
              description: "API para una app de ecommerce" 
          },
    }
};
const swaggerDocs = (app, port) => {
	// creamos la ruta para nuestra documentación
	app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
	// Hacemos la documentación en formato JSON
	app.get("api/v1/docs.json", (req, res) => {
		res.setHeader({"Content-Type": "application/json"});
		res.send(swaggerSpec);
	});
	// mostramos un mensaje en consola para saber que la documentación 
	// esta lista
	console.log(`Doc V1 disponible en ${process.env.URL}:${port}/api/v1/docs`);
}
const swaggerSpec = swaggerJSDoc(options);

module.exports = {swaggerDocs}