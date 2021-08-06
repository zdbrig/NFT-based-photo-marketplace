const express = require("express");

const redeemeds = require("../models/redeemedModels");
var redeemedDao = {};
redeemedDao.getRedeemed = (idRedeemed) =>
    new Promise((resolve, reject) => {
        redeemeds.findOne({idRedeemed: idRedeemed }, (err, res) =>
            err ? reject(err) : resolve({ res })
        );
    });
 
    redeemedDao.addRedeemeds = (redeemed) => {
    console.log(redeemed);
    new Promise((resolve, reject) => {
        new redeemeds({
            //publicKey: user.publicKey,
            idRedeemed: redeemed.idRedeemed,
            name: redeemed.name,
            address: redeemed.address,
            //lastname: user.lastname,
            //username: user.username,
            //photo: user.photo,
        }).save((err) => (err ? reject({ err: err }) : resolve({ res: "ok" })));
    });
};

/* userDao.updateUsers = (id, user) =>
    new Promise((resolve, reject) => {
        console.log("update " + JSON.stringify(user)),
            console.log("id " + JSON.stringify(id)),
            users.findOneAndUpdate({ publicKey: id }, { $set: user }, (err) =>
                err ? reject(err) : resolve({ res: "ok" })
            );
    }); */
module.exports = redeemedDao;
