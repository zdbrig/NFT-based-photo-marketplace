const express = require("express");
require("./models/dbConfig");

//start bdd

//start Express
const app = express();
const routerUser = require("./router/router");
app.use("/", routerUser);
app.use(express.json());
app.listen(3002, () => {
    console.log("le serveur est lancé sur le port 3003");
});
