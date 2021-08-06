const router = require("express").Router();
var options = {
    inflate: true,
    limit: "100kb",
    type: "application/octet-stream",
};

var fs = require("fs");
var getRawBody = require("raw-body");
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.use(bodyParser.urlencoded({ extended: true }));
const controller = require("../Controller/userController");
const sendEmail = require("../models/sendEmail");

 router.get("/api/getUserByEmail", (req, res, next) =>
    getRawBody(req)
        .then((response) => {
            let email = req.query.email;
            return controller.getUser(email);
        })

        .then((assets) => {
            console.log(assets.res);
            res.send(assets)
        })
        .catch((error) => console.log("error: " + error))
); 
router.post("/api/sendEmail", (req, res, next) =>
    getRawBody(req)
        .then((response) => {
            console.log("user"+response)
            let user = JSON.parse(response);
            let username=user.username;
            let emailAdmin=user.emailAdmin;
            let address=user.address;
            return sendEmail.mailSendToAdmin(username, emailAdmin,address);
        })
        .then(function (user) {
            res.send(user);
        })
        .catch((error) => console.log("error: " + error))
);
router.post("/api/addUsers", (req, res, next) =>
    getRawBody(req)
        .then((response) => {
            let user = JSON.parse(response);
            console.log("res" + response);
            return controller.addUsers(user);
        })
        .then(function (user) {
            res.send(user);
        })
        .catch((error) => console.log("error: " + error))
);
/* router.post("/api/updateUsers", (req, res, next) =>
    getRawBody(req)
        .then((response) => {
            let user = JSON.parse(response);
            console.log("id" + req.query.id);
            // var id = new ObjectId(request.params.id);
            let id = req.query.id;
            console.log("res" + id);
            return controller.updateUsers(id, user);
        })
        .then(function (user) {
            res.send(user);
        })
        .catch((error) => console.log("error: " + error))
); */
module.exports = router;
