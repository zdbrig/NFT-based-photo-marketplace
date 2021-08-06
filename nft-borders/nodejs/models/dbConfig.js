const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/nft", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("connecté à Mongoose");
});
module.exports = {
    authEmail: 'fathallahamal93@gmail.com',
    authPassword : 'amal14101986',
    host:'smtp.gmail.com',
    port:587

};
