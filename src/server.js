const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || "8000";
const {swaggerDocs} = require('../swagger');

app.listen(PORT, () => {
  console.log(`servidor escuchando en el pueto ${PORT}`);
  swaggerDocs(app,PORT);
});
