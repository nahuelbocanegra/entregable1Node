1-- iniciar proyecto "npm init -y",
2 -- instalar dependencias express sequelize pg pg-hstore cors dotenv
3-- instalar dependencias de desarrolo nodemon morgan 
4-- estructuras de carpetas 
    //src
    ---/sevices
    ---/models
    ----/controllers
    -----/routes
    -----/middlewares
    -------/ seeders 
    --------/ test 
    ---------/ utils 
    ----------/ templates
         app.js 
         server.js
5-scripts start,dev en package.json
6-- crear un server basico 
7-- configurar la conexion a bd 
8- autenticar la base de datos en app.js
9- Crear un modelo generico de usuarios 
10- crear el init models
11-sincronizar la base de datos
12-registrar usuarios-->creacion de usuarios
     encriptar las contaseñas 
     dependencia--> bcrypt
     npm install bcrypt 
13-autenticacion de login