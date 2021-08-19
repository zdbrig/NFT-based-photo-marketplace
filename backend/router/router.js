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
const userInfocontroller = require("../Controller/userInfoController");
const redeemController = require("../Controller/redeemedController");
const sendEmail = require("../models/sendEmail");

router.get("/api/getUserByPublickey", (req, res, next) =>
    getRawBody(req)
        .then((response) => {
            let publicKey = req.query.publicKey;
            return userInfocontroller.getUserByPublicKey(publicKey);
        })

        .then((assets) => {
            console.log(assets.res);

            if (assets.res !== null) {
                console.log("iff");

                res.send(assets.res);
            } else {
                res.send({ user: "undefined" });
            }
        })
        .catch((error) => console.log("error: " + error))
);
router.get("/api/getUserInfoByEmail", (req, res, next) =>
    getRawBody(req)
    .then((response) => {
        let email = req.query.email;
        return userInfocontroller.getUser(email);
    })

    .then((assets) => {
        console.log(assets.res);

        if (assets.res !== null) {


            res.send(assets.res);
        } else {
            res.send({ user: "undefined" });
        }
    })
    .catch((error) => console.log("error: " + error))
);
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
router.post("/api/sendEmailAdmin", (req, res, next) =>
    getRawBody(req)
    .then((response) => {
        console.log("user" + response)
        let user = JSON.parse(response);
        let username = user.username;
        let emailAdmin = user.emailAdmin;
        let address = user.address;
        return sendEmail.mailSendToAdmin(username, emailAdmin, address);
    })
    .then(function(user) {
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
    .then(function(user) {
        res.send(user);
    })
    .catch((error) => console.log("error: " + error))
);
router.get("/api/getRedeemById", (req, res, next) =>
    getRawBody(req)
    .then((response) => {
        let idRedeemed = req.query.idRedeemed;
        return redeemController.getRedeemed(idRedeemed);
    })

    .then((assets) => {
        console.log(assets.res);
        res.send(assets)
    })
    .catch((error) => console.log("error: " + error))
);
router.post("/api/addRedeemeds", (req, res, next) =>
    getRawBody(req)
    .then((response) => {
        let redeem = JSON.parse(response);
        console.log("res" + response);
        return redeemController.addRedeemeds(redeem);
    })
    .then(function(redeem) {
        res.send(redeem);
    })
    .catch((error) => console.log("error: " + error))
);

router.post("/api/addUserInfo", (req, res, next) =>
    getRawBody(req)
    .then((response) => {
        let user = JSON.parse(response);
        console.log("res" + response);
        return userInfocontroller.addUserInfo(user);
    })
    .then(function(user) {
        res.send(user);
    })
    .catch((error) => console.log("error: " + error))
);

router.post("/api/sendEmail", (req, res, next) =>
    getRawBody(req)
        .then((response) => {
            console.log("user"+response)
            let user = JSON.parse(response);
          let username=user.username;
          let imgQRCode=user.imgQRCode;
          let emailAdmin=user.emailAdmin;
            return sendEmail.mailSendToUser(username, imgQRCode, emailAdmin);
        })
        .then(function (user) {
            res.send(user);
        })
        .catch((error) => console.log("error: " + error))
);
router.post("/api/updateUserInfo", (req, res, next) =>
    getRawBody(req)
        .then((response) => {
            let user = JSON.parse(response);
            console.log("id" + req.query.id);
            // var id = new ObjectId(request.params.id);
            let id = req.query.id;
            console.log("res" + id);
            return userInfocontroller.updateUserInfo(id, user);
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